import type { SidebarEntry } from "./sidebar";

export const messageMethods: SidebarEntry[] = [
  { text: "msg.Reply()", link: "/api/bound#reply" },
  { text: "msg.Send()", link: "/api/bound#send" },
  { text: "msg.Edit()", link: "/api/bound#edit" },
  { text: "msg.Delete()", link: "/api/bound#delete" },
  { text: "msg.Forward()", link: "/api/bound#forward" },
  { text: "msg.Copy()", link: "/api/bound#copy" },
  { text: "msg.React()", link: "/api/bound#react" },
  { text: "msg.Pin()", link: "/api/bound#pin" },
  { text: "msg.Download()", link: "/api/bound#download" },
  { text: "msg.ReplyMedia()", link: "/api/bound#replymedia--sendmedia--answermedia" },
  { text: "msg.ReplyPhoto()", link: "/api/bound#photo" },
  { text: "msg.ReplyAudio()", link: "/api/bound#audio" },
  { text: "msg.ReplyVideo()", link: "/api/bound#video" },
  { text: "msg.ReplyDocument()", link: "/api/bound#document" },
  { text: "msg.ReplyAnimation()", link: "/api/bound#animation" },
  { text: "msg.ReplyVoice()", link: "/api/bound#voice" },
  { text: "msg.ReplyVideoNote()", link: "/api/bound#video-note" },
  { text: "msg.ReplySticker()", link: "/api/bound#sticker" },
  { text: "msg.ReplyContact()", link: "/api/bound#contact" },
  { text: "msg.ReplyLocation()", link: "/api/bound#location" },
  { text: "msg.ReplyVenue()", link: "/api/bound#venue" },
  { text: "msg.ReplyPoll()", link: "/api/bound#poll" },
  { text: "msg.ReplyDice()", link: "/api/bound#dice" },
  { text: "msg.ReplyGame()", link: "/api/bound#game" },
  { text: "msg.ReplyMediaGroup()", link: "/api/bound#media-group-album" },
  { text: "msg.ReplyChecklist()", link: "/api/bound#checklist" },
  { text: "msg.Vote()", link: "/api/bound#vote" },
  { text: "msg.GetMediaGroup()", link: "/api/bound#getmediagroup" },
  { text: "msg.CopyMediaGroup()", link: "/api/bound#copymediagroup" },
];

export const callbackMethods: SidebarEntry[] = [
  { text: "cb.Answer()", link: "/api/bound#answer--answeralert--answerurl" },
  { text: "cb.Reply()", link: "/api/bound#reply" },
  { text: "cb.EditMessage()", link: "/api/bound#editmessage--editmessagetext" },
  { text: "cb.EditCaption()", link: "/api/bound#editcaption--editmessagecaption" },
  { text: "cb.EditMedia()", link: "/api/bound#editmedia--editmessagemedia" },
  { text: "cb.EditReplyMarkup()", link: "/api/bound#editreplymarkup--editmessagereplymarkup" },
  { text: "cb.Delete()", link: "/api/bound#delete-1" },
];

export const inlineMethods: SidebarEntry[] = [
  { text: "iq.Answer()", link: "/api/bound#answer" },
  { text: "iq.AnswerArticle()", link: "/api/bound#answerarticle--answerarticles" },
  { text: "iq.AnswerPhoto()", link: "/api/bound#answerphoto--answerphotos" },
  { text: "iq.AnswerDocument()", link: "/api/bound#answerdocument--answerdocuments" },
  { text: "iq.AnswerGame()", link: "/api/bound#answergame" },
];

export const chatMethods: SidebarEntry[] = [
  { text: "chat.Archive()", link: "/api/bound-chat#archive" },
  { text: "chat.Unarchive()", link: "/api/bound-chat#unarchive" },
  { text: "chat.SetTitle()", link: "/api/bound-chat#settitle" },
  { text: "chat.SetDescription()", link: "/api/bound-chat#setdescription" },
  { text: "chat.SetPhoto()", link: "/api/bound-chat#setphoto" },
  { text: "chat.DeletePhoto()", link: "/api/bound-chat#deletephoto" },
  { text: "chat.SetUsername()", link: "/api/bound-chat#setusername" },
  { text: "chat.BanMember()", link: "/api/bound-chat#banmember" },
  { text: "chat.UnbanMember()", link: "/api/bound-chat#unbanmember" },
  { text: "chat.RestrictMember()", link: "/api/bound-chat#restrictmember" },
  { text: "chat.PromoteMember()", link: "/api/bound-chat#promotemember" },
  { text: "chat.GetMember()", link: "/api/bound-chat#getmember" },
  { text: "chat.GetMembers()", link: "/api/bound-chat#getmembers" },
  { text: "chat.Join()", link: "/api/bound-chat#join" },
  { text: "chat.Leave()", link: "/api/bound-chat#leave" },
  { text: "chat.ExportInviteLink()", link: "/api/bound-chat#exportinvitelink" },
  { text: "chat.Mute()", link: "/api/bound-chat#mute" },
  { text: "chat.Unmute()", link: "/api/bound-chat#unmute" },
  { text: "chat.SetProtectedContent()", link: "/api/bound-chat#setprotectedcontent" },
  { text: "chat.SetTTL()", link: "/api/bound-chat#setttl" },
  { text: "chat.SetPermissions()", link: "/api/bound-chat#setpermissions" },
  { text: "chat.SetSlowMode()", link: "/api/bound-chat#setslowmode" },
  { text: "chat.UnpinAll()", link: "/api/bound-chat#unpinall" },
  { text: "chat.GetChat()", link: "/api/bound-chat#getchat" },
  { text: "chat.GetEventLog()", link: "/api/bound-chat#geteventlog" },
];

export const userBoundMethods: SidebarEntry[] = [
  { text: "user.Archive()", link: "/api/bound-user#archive" },
  { text: "user.Unarchive()", link: "/api/bound-user#unarchive" },
  { text: "user.Block()", link: "/api/bound-user#block" },
  { text: "user.Unblock()", link: "/api/bound-user#unblock" },
  { text: "user.GetCommonChats()", link: "/api/bound-user#getcommonchats" },
];

export const storyBoundMethods: SidebarEntry[] = [
  { text: "story.Reply()", link: "/api/bound-story#reply" },
  { text: "story.ReplyMedia()", link: "/api/bound-story#replymedia" },
  { text: "story.ReplyPhoto()", link: "/api/bound-story#replyphoto" },
  { text: "story.ReplyAnimation()", link: "/api/bound-story#replyanimation" },
  { text: "story.ReplyAudio()", link: "/api/bound-story#replyaudio--replyvideo--replyvoice--replyvideonote--replysticker" },
  { text: "story.Forward()", link: "/api/bound-story#forward" },
  { text: "story.Copy()", link: "/api/bound-story#copy" },
  { text: "story.Delete()", link: "/api/bound-story#delete" },
  { text: "story.EditCaption()", link: "/api/bound-story#editcaption" },
  { text: "story.EditMedia()", link: "/api/bound-story#editmedia" },
  { text: "story.EditPrivacy()", link: "/api/bound-story#editprivacy" },
  { text: "story.React()", link: "/api/bound-story#react" },
  { text: "story.Download()", link: "/api/bound-story#download" },
  { text: "story.Read()", link: "/api/bound-story#read" },
];

export const giftBoundMethods: SidebarEntry[] = [
  { text: "gift.Show()", link: "/api/bound-gift#show" },
  { text: "gift.Hide()", link: "/api/bound-gift#hide" },
  { text: "gift.Convert()", link: "/api/bound-gift#convert" },
  { text: "gift.Upgrade()", link: "/api/bound-gift#upgrade" },
  { text: "gift.Transfer()", link: "/api/bound-gift#transfer" },
];

export const otherBoundMethods: SidebarEntry[] = [
  { text: "ChatJoinRequest.Approve()", link: "/api/bound-other#approve" },
  { text: "ChatJoinRequest.Decline()", link: "/api/bound-other#decline" },
  { text: "PreCheckoutQuery.Answer()", link: "/api/bound-other#answer" },
  { text: "ShippingQuery.Answer()", link: "/api/bound-other#answer-1" },
  { text: "ActiveSession.Reset()", link: "/api/bound-other#reset" },
  { text: "Folder.Delete()", link: "/api/bound-other#delete" },
  { text: "Folder.Edit()", link: "/api/bound-other#edit" },
  { text: "Folder.IncludeChat()", link: "/api/bound-other#includechat" },
  { text: "Folder.ExcludeChat()", link: "/api/bound-other#excludechat" },
  { text: "Folder.PinChat()", link: "/api/bound-other#pinchat" },
  { text: "Folder.RemoveChat()", link: "/api/bound-other#removechat" },
];
