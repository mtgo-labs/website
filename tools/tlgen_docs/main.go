package main

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"unicode"
)

type Section int

const (
	SectionTypes Section = iota
	SectionFunctions
)

type Arg struct {
	Name     string
	Type     string
	FlagBit  int
	FlagName string
}

type Combinator struct {
	Section   Section
	QualName  string
	Namespace string
	Name      string
	ID        uint32
	HasFlags  bool
	Args      []Arg
	QualType  string
	TypeSpace string
	Type      string
}

var (
	sectionRe    = regexp.MustCompile(`^---(\w+)---$`)
	combinatorRe = regexp.MustCompile(`^(\w[\w.]*)#([0-9a-fA-F]+)\s+(.*)=\s*([^;]+);$`)
	argRe        = regexp.MustCompile(`^(\w[\w]*)\s*:\s*(.+)$`)
	flagsRe      = regexp.MustCompile(`^(flags\d*)\.(\d+)\?(.+)$`)
)

func parseArgs(s string) []Arg {
	if s == "" {
		return nil
	}
	fields := strings.Fields(s)
	var args []Arg
	for _, field := range fields {
		field = strings.TrimSuffix(field, ",")
		m := argRe.FindStringSubmatch(field)
		if m == nil {
			continue
		}
		name := m[1]
		typeStr := m[2]
		if typeStr == "#" {
			args = append(args, Arg{Name: name, Type: "#", FlagBit: -1})
			continue
		}
		if fm := flagsRe.FindStringSubmatch(typeStr); fm != nil {
			bit, _ := strconv.Atoi(fm[2])
			args = append(args, Arg{Name: name, Type: fm[3], FlagBit: bit, FlagName: fm[1]})
			continue
		}
		if strings.HasPrefix(typeStr, "{") {
			continue
		}
		args = append(args, Arg{Name: name, Type: typeStr, FlagBit: -1})
	}
	return args
}

func parseFile(path string) ([]Combinator, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var combos []Combinator
	section := SectionTypes

	scanner := bufio.NewScanner(f)
	scanner.Buffer(make([]byte, 1024*1024), 1024*1024)

	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "//") {
			continue
		}
		if m := sectionRe.FindStringSubmatch(line); m != nil {
			switch m[1] {
			case "types":
				section = SectionTypes
			case "functions":
				section = SectionFunctions
			}
			continue
		}
		if m := combinatorRe.FindStringSubmatch(line); m != nil {
			id, _ := strconv.ParseUint(m[2], 16, 32)
			parts := strings.SplitN(m[1], ".", 2)
			ns, clean := "", m[1]
			if len(parts) == 2 {
				ns = parts[0]
				clean = parts[1]
			}
			retType := strings.TrimSpace(m[4])
			typeParts := strings.SplitN(retType, ".", 2)
			ts, tn := "", retType
			if len(typeParts) == 2 {
				ts = typeParts[0]
				tn = typeParts[1]
			}
			args := parseArgs(strings.TrimSpace(m[3]))
			hasFlags := false
			for _, a := range args {
				if a.Name == "flags" || (strings.HasPrefix(a.Name, "flags") && a.Type == "#") {
					hasFlags = true
					break
				}
			}
			combos = append(combos, Combinator{
				Section:   section,
				QualName:  m[1],
				Namespace: ns,
				Name:      clean,
				ID:        uint32(id),
				HasFlags:  hasFlags,
				Args:      args,
				QualType:  retType,
				TypeSpace: ts,
				Type:      tn,
			})
		}
	}
	return combos, scanner.Err()
}

var goInitialisms = map[string]string{
	"id":   "ID",
	"msg":  "Msg",
	"msgs": "Msgs",
	"dc":   "DC",
	"ttl":  "TTL",
	"url":  "URL",
	"pts":  "PTS",
	"srp":  "SRP",
	"ipv4": "IPv4",
	"ipv6": "IPv6",
	"tl":   "TL",
	"rpc":  "RPC",
	"json": "JSON",
	"api":  "API",
	"tcp":  "TCP",
	"udp":  "UDP",
	"http": "HTTP",
	"https": "HTTPS",
	"cdn":  "CDN",
	"rsa":  "RSA",
	"sha":  "SHA",
	"aes":  "AES",
	"sha256": "SHA256",
	"sha1": "SHA1",
	"md5":  "MD5",
	"png":  "PNG",
	"jpg":  "JPEG",
	"jpeg": "JPEG",
	"gif":  "GIF",
	"mp4":  "MP4",
	"ogg":  "OGG",
	"pdf":  "PDF",
	"svg":  "SVG",
	"html": "HTML",
	"css":  "CSS",
	"sdk":  "SDK",
	"tts":  "TTS",
	"stt":  "STT",
	"uri":  "URI",
	"utc":  "UTC",
	"gmt":  "GMT",
	"ssl":  "SSL",
	"dh":   "DH",
	"pq":   "PQ",
}

func tlToGo(s string) string {
	s = strings.TrimPrefix(s, "Vector<")
	s = strings.TrimSuffix(s, ">")
	if s == "" {
		return ""
	}
	parts := strings.Split(camelToSnake(s), "_")
	var result []string
	for _, p := range parts {
		if p == "" {
			continue
		}
		if v, ok := goInitialisms[p]; ok {
			result = append(result, v)
		} else {
			result = append(result, strings.ToUpper(p[:1])+p[1:])
		}
	}
	return strings.Join(result, "")
}

func camelToSnake(s string) string {
	var result []rune
	runes := []rune(s)
	for i, r := range runes {
		if unicode.IsUpper(r) {
			if i > 0 {
				prev := runes[i-1]
				if unicode.IsLower(prev) || (unicode.IsUpper(prev) && i+1 < len(runes) && unicode.IsLower(runes[i+1])) {
					result = append(result, '_')
				}
			}
			result = append(result, unicode.ToLower(r))
		} else {
			result = append(result, r)
		}
	}
	return string(result)
}

func goType(tl string) string {
	if strings.HasPrefix(tl, "Vector<") {
		inner := strings.TrimSuffix(strings.TrimPrefix(tl, "Vector<"), ">")
		return "[]" + goType(inner)
	}
	if tl == "int" {
		return "int32"
	}
	if tl == "long" || tl == "int53" {
		return "int64"
	}
	if tl == "double" {
		return "float64"
	}
	if tl == "string" {
		return "string"
	}
	if tl == "bytes" {
		return "[]byte"
	}
	if tl == "Bool" || tl == "true" {
		return "bool"
	}
	if tl == "#" {
		return "uint32"
	}
	if tl == "!X" {
		return "TLObject"
	}
	return tlToGo(tl)
}

func slug(name string) string {
	s := strings.ToLower(name)
	s = regexp.MustCompile(`[^a-z0-9]+`).ReplaceAllString(s, "-")
	return strings.Trim(s, "-")
}

type ByName []Combinator

func (a ByName) Len() int           { return len(a) }
func (a ByName) Less(i, j int) bool { return a[i].Name < a[j].Name }
func (a ByName) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }

func main() {
	tlPath := os.Args[1]
	outDir := os.Args[2]

	combos, err := parseFile(tlPath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "parse error: %v\n", err)
		os.Exit(1)
	}

	os.MkdirAll(filepath.Join(outDir, "tl"), 0755)

	var types []Combinator
	var functions []Combinator
	typeMap := map[string][]Combinator{}
	nsFuncs := map[string][]Combinator{}

	for _, c := range combos {
		if c.Section == SectionTypes {
			types = append(types, c)
			key := c.QualType
			typeMap[key] = append(typeMap[key], c)
		} else {
			functions = append(functions, c)
			ns := c.Namespace
			if ns == "" {
				ns = "misc"
			}
			nsFuncs[ns] = append(nsFuncs[ns], c)
		}
	}

	sort.Sort(ByName(types))
	sort.Sort(ByName(functions))

	writeTypesIndex(outDir, typeMap)
	writeConstructorsIndex(outDir, types)
	writeMethodsIndex(outDir, nsFuncs)
	writeTypePages(outDir, typeMap)
	writeMethodPages(outDir, nsFuncs)

	fmt.Printf("Generated TL reference: %d types, %d constructors, %d methods\n",
		len(typeMap), len(types), len(functions))
}

const layerVersion = 225

func writeTypesIndex(outDir string, typeMap map[string][]Combinator) {
	path := filepath.Join(outDir, "tl", "types.md")
	f, _ := os.Create(path)
	defer f.Close()

	f.WriteString("---\ntitle: TL Types\ndescription: All abstract TL types and their implementing constructors.\n---\n\n")
	f.WriteString("# TL Types\n\n")
	fmt.Fprintf(f, "Layer **%d** | %d types\n\n", layerVersion, len(typeMap))
	f.WriteString("Abstract types from the Telegram TL schema. Each type is an interface implemented by one or more constructors.\n\n")

	keys := sortedKeys(typeMap)
	for _, k := range keys {
		constructors := typeMap[k]
		goName := tlToGo(k)
		f.WriteString(fmt.Sprintf("## %s\n\n", goName))
		f.WriteString(fmt.Sprintf("TL name: `%s`  \n", k))
		f.WriteString(fmt.Sprintf("Constructors: %d\n\n", len(constructors)))
		f.WriteString("| Constructor | ID |\n|---|---|\n")
		for _, c := range constructors {
			slug := slug(c.QualName)
			f.WriteString(fmt.Sprintf("| [%s](/tl/constructor/%s) | `0x%08x` |\n", tlToGo(c.Name), slug, c.ID))
		}
		f.WriteString("\n")
	}
}

func writeConstructorsIndex(outDir string, types []Combinator) {
	path := filepath.Join(outDir, "tl", "constructors.md")
	f, _ := os.Create(path)
	defer f.Close()

	nsTypes := map[string][]Combinator{}
	for _, c := range types {
		ns := c.Namespace
		if ns == "" {
			ns = "misc"
		}
		nsTypes[ns] = append(nsTypes[ns], c)
	}

	f.WriteString("---\ntitle: TL Constructors\ndescription: All TL constructors from the Telegram MTProto schema, organized by namespace.\n---\n\n")
	f.WriteString("# TL Constructors\n\n")
	fmt.Fprintf(f, "Layer **%d** | Total: **%d** constructors\n\n", layerVersion, len(types))

	namespaces := sortedMapKeys(nsTypes)
	for _, ns := range namespaces {
		constructors := nsTypes[ns]
		sort.Sort(ByName(constructors))
		f.WriteString(fmt.Sprintf("## %s\n\n", ns))
		f.WriteString("<div class=\"wide-table tl-constructors-table\">\n\n")
		f.WriteString("| Name | Returns | ID |\n|---|---|---|\n")
		for _, c := range constructors {
			slug := slug(c.QualName)
			f.WriteString(fmt.Sprintf("| [%s](/tl/constructor/%s) | `%s` | `0x%08x` |\n", tlToGo(c.QualName), slug, tlToGo(c.QualType), c.ID))
		}
		f.WriteString("\n</div>\n\n")
	}
}

func writeMethodsIndex(outDir string, nsFuncs map[string][]Combinator) {
	path := filepath.Join(outDir, "tl", "methods.md")
	f, _ := os.Create(path)
	defer f.Close()

	total := 0
	for _, v := range nsFuncs {
		total += len(v)
	}

	f.WriteString("---\ntitle: TL Methods\ndescription: All TL RPC methods from the Telegram MTProto schema, organized by namespace.\n---\n\n")
	f.WriteString("# TL Methods\n\n")
	fmt.Fprintf(f, "Layer **%d** | Total: **%d** methods\n\n", layerVersion, total)

	namespaces := sortedMapKeys(nsFuncs)
	for _, ns := range namespaces {
		funcs := nsFuncs[ns]
		sort.Sort(ByName(funcs))
		f.WriteString(fmt.Sprintf("## %s\n\n", ns))
		f.WriteString("<div class=\"wide-table\">\n\n")
		f.WriteString("| Method | Returns | ID |\n|---|---|---|\n")
		for _, c := range funcs {
			slug := slug(c.QualName)
			f.WriteString(fmt.Sprintf("| [%s](/tl/method/%s) | `%s` | `0x%08x` |\n", tlToGo(c.QualName), slug, tlToGo(c.QualType), c.ID))
		}
		f.WriteString("\n</div>\n\n")
	}
}

func writeMethodPages(outDir string, nsFuncs map[string][]Combinator) {
	methodDir := filepath.Join(outDir, "tl", "method")
	os.MkdirAll(methodDir, 0755)

	for _, funcs := range nsFuncs {
		for _, c := range funcs {
			slug := slug(c.QualName)
			path := filepath.Join(methodDir, slug+".md")
			f, _ := os.Create(path)
			goName := tlToGo(c.Name)
			goTypeName := tlToGo(c.Type)

			fmt.Fprintf(f, "---\ntitle: %s\ndescription: TL method %s\n---\n\n", goName, c.QualName)
			fmt.Fprintf(f, "# %s\n\n", c.QualName)
			fmt.Fprintf(f, "<span class=\"layer-badge\">Layer %d</span>\n\n", layerVersion)
			fmt.Fprintf(f, "Constructor ID: `0x%08x`  \n", c.ID)
			fmt.Fprintf(f, "Returns: [%s](/tl/types#%s)\n\n", goTypeName, strings.ToLower(goTypeName))

			if len(c.Args) > 0 {
				f.WriteString("## Parameters\n\n")
				f.WriteString("| Name | Type | Description |\n|---|---|---|\n")
				for _, a := range c.Args {
					if a.Type == "#" {
						continue
					}
					gt := goType(a.Type)
					optional := ""
					if a.FlagBit >= 0 {
						optional = fmt.Sprintf(" *(flags.%d, optional)*", a.FlagBit)
					}
					fmt.Fprintf(f, "| `%s` | `%s`%s | | \n", a.Name, gt, optional)
				}
				f.WriteString("\n")
			}

			f.WriteString("## Example\n\n")
			f.WriteString("```go\n")
			fmt.Fprintf(f, "result, err := client.Raw(&tg.%sRequest{\n", goName)

			hasNonFlagArgs := false
			for _, a := range c.Args {
				if a.Type == "#" {
					continue
				}
				hasNonFlagArgs = true
				gt := goType(a.Type)
				fmt.Fprintf(f, "    %s: ", a.Name)
				if strings.HasPrefix(gt, "[]") {
					fmt.Fprintf(f, "nil,\n")
				} else if gt == "string" {
					fmt.Fprintf(f, "\"\",\n")
				} else if gt == "bool" {
					fmt.Fprintf(f, "false,\n")
				} else if gt == "int32" || gt == "int64" || gt == "float64" {
					fmt.Fprintf(f, "0,\n")
				} else if gt == "[]byte" {
					fmt.Fprintf(f, "nil,\n")
				} else {
					fmt.Fprintf(f, "nil, // %s\n", gt)
				}
			}

			if !hasNonFlagArgs {
				f.WriteString("})\n")
			} else {
				f.WriteString("})\n")
			}
			f.WriteString("if err != nil {\n")
			f.WriteString("    panic(err)\n")
			f.WriteString("}\n")
			fmt.Fprintf(f, "print(result)\n")
			f.WriteString("```\n")

			f.Close()
		}
	}
}

func writeTypePages(outDir string, typeMap map[string][]Combinator) {
	constructorDir := filepath.Join(outDir, "tl", "constructor")
	os.MkdirAll(constructorDir, 0755)

	for _, constructors := range typeMap {
		for _, c := range constructors {
			slug := slug(c.QualName)
			path := filepath.Join(constructorDir, slug+".md")
			f, _ := os.Create(path)
			goName := tlToGo(c.Name)
			goTypeName := tlToGo(c.Type)

			fmt.Fprintf(f, "---\ntitle: %s\ndescription: TL constructor %s\n---\n\n", goName, c.QualName)
			fmt.Fprintf(f, "# %s\n\n", goName)
			fmt.Fprintf(f, "<span class=\"layer-badge\">Layer %d</span>\n\n", layerVersion)
			fmt.Fprintf(f, "TL name: `%s`  \n", c.QualName)
			fmt.Fprintf(f, "Constructor ID: `0x%08x`  \n", c.ID)
			fmt.Fprintf(f, "Returns: [%s](/tl/types#%s)\n\n", goTypeName, strings.ToLower(goTypeName))

			if len(c.Args) > 0 {
				f.WriteString("## Fields\n\n")
				f.WriteString("| Field | Type | Description |\n|---|---|---|\n")
				for _, a := range c.Args {
					gt := goType(a.Type)
					optional := ""
					if a.FlagBit >= 0 {
						optional = fmt.Sprintf(" *(flags.%d)*", a.FlagBit)
					}
					fmt.Fprintf(f, "| `%s` | `%s`%s | | \n", a.Name, gt, optional)
				}
			}

			f.Close()
		}
	}
}

func sortedKeys(m map[string][]Combinator) []string {
	keys := make([]string, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	return keys
}

func sortedMapKeys(m map[string][]Combinator) []string {
	keys := make([]string, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	return keys
}
