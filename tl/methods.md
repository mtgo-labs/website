---
title: TL Methods
description: All TL RPC methods from the Telegram MTProto schema, organized by namespace.
---

# TL Methods

Layer **225** | Total: **783** methods

## account

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Account.acceptAuthorization](/tl/method/account-acceptauthorization) | `Bool` | `0xf3ed4c73` |
| [Account.cancelPasswordEmail](/tl/method/account-cancelpasswordemail) | `Bool` | `0xc1cbd5b6` |
| [Account.changeAuthorizationSettings](/tl/method/account-changeauthorizationsettings) | `Bool` | `0x40f48462` |
| [Account.changePhone](/tl/method/account-changephone) | `User` | `0x70c32edb` |
| [Account.checkUsername](/tl/method/account-checkusername) | `Bool` | `0x2714d86c` |
| [Account.clearRecentEmojiStatuses](/tl/method/account-clearrecentemojistatuses) | `Bool` | `0x18201aae` |
| [Account.confirmPasswordEmail](/tl/method/account-confirmpasswordemail) | `Bool` | `0x8fdf1920` |
| [Account.confirmPhone](/tl/method/account-confirmphone) | `Bool` | `0x5f2178c3` |
| [Account.createBusinessChatLink](/tl/method/account-createbusinesschatlink) | `BusinessChatLink` | `0x8851e68e` |
| [Account.createTheme](/tl/method/account-createtheme) | `Theme` | `0x652e4400` |
| [Account.declinePasswordReset](/tl/method/account-declinepasswordreset) | `Bool` | `0x4c9409f6` |
| [Account.deleteAccount](/tl/method/account-deleteaccount) | `Bool` | `0xa2c0cf74` |
| [Account.deleteAutoSaveExceptions](/tl/method/account-deleteautosaveexceptions) | `Bool` | `0x53bc0020` |
| [Account.deleteBusinessChatLink](/tl/method/account-deletebusinesschatlink) | `Bool` | `0x60073674` |
| [Account.deletePasskey](/tl/method/account-deletepasskey) | `Bool` | `0xf5b5563f` |
| [Account.deleteSecureValue](/tl/method/account-deletesecurevalue) | `Bool` | `0xb880bc4b` |
| [Account.disablePeerConnectedBot](/tl/method/account-disablepeerconnectedbot) | `Bool` | `0x5e437ed9` |
| [Account.editBusinessChatLink](/tl/method/account-editbusinesschatlink) | `BusinessChatLink` | `0x8c3410af` |
| [Account.finishTakeoutSession](/tl/method/account-finishtakeoutsession) | `Bool` | `0x1d2652ee` |
| [Account.getAccountTTL](/tl/method/account-getaccountttl) | `AccountDaysTTL` | `0x08fc711d` |
| [Account.getAllSecureValues](/tl/method/account-getallsecurevalues) | `SecureValue` | `0xb288bc7d` |
| [Account.getAuthorizationForm](/tl/method/account-getauthorizationform) | `Account.authorizationForm` | `0xa929597a` |
| [Account.getAuthorizations](/tl/method/account-getauthorizations) | `Account.authorizations` | `0xe320c158` |
| [Account.getAutoDownloadSettings](/tl/method/account-getautodownloadsettings) | `Account.autoDownloadSettings` | `0x56da0b3f` |
| [Account.getAutoSaveSettings](/tl/method/account-getautosavesettings) | `Account.autoSaveSettings` | `0xadcbbcda` |
| [Account.getBotBusinessConnection](/tl/method/account-getbotbusinessconnection) | `Updates` | `0x76a86270` |
| [Account.getBusinessChatLinks](/tl/method/account-getbusinesschatlinks) | `Account.businessChatLinks` | `0x6f70dde1` |
| [Account.getChannelDefaultEmojiStatuses](/tl/method/account-getchanneldefaultemojistatuses) | `Account.emojiStatuses` | `0x7727a7d5` |
| [Account.getChannelRestrictedStatusEmojis](/tl/method/account-getchannelrestrictedstatusemojis) | `EmojiList` | `0x35a9e0d5` |
| [Account.getChatThemes](/tl/method/account-getchatthemes) | `Account.themes` | `0xd638de89` |
| [Account.getCollectibleEmojiStatuses](/tl/method/account-getcollectibleemojistatuses) | `Account.emojiStatuses` | `0x2e7b4543` |
| [Account.getConnectedBots](/tl/method/account-getconnectedbots) | `Account.connectedBots` | `0x4ea4c80f` |
| [Account.getContactSignUpNotification](/tl/method/account-getcontactsignupnotification) | `Bool` | `0x9f07c728` |
| [Account.getContentSettings](/tl/method/account-getcontentsettings) | `Account.contentSettings` | `0x8b9b4dae` |
| [Account.getDefaultBackgroundEmojis](/tl/method/account-getdefaultbackgroundemojis) | `EmojiList` | `0xa60ab9ce` |
| [Account.getDefaultEmojiStatuses](/tl/method/account-getdefaultemojistatuses) | `Account.emojiStatuses` | `0xd6753386` |
| [Account.getDefaultGroupPhotoEmojis](/tl/method/account-getdefaultgroupphotoemojis) | `EmojiList` | `0x915860ae` |
| [Account.getDefaultProfilePhotoEmojis](/tl/method/account-getdefaultprofilephotoemojis) | `EmojiList` | `0xe2750328` |
| [Account.getGlobalPrivacySettings](/tl/method/account-getglobalprivacysettings) | `GlobalPrivacySettings` | `0xeb2b4cf6` |
| [Account.getMultiWallPapers](/tl/method/account-getmultiwallpapers) | `WallPaper` | `0x65ad71dc` |
| [Account.getNotifyExceptions](/tl/method/account-getnotifyexceptions) | `Updates` | `0x53577479` |
| [Account.getNotifySettings](/tl/method/account-getnotifysettings) | `PeerNotifySettings` | `0x12b3ad31` |
| [Account.getPaidMessagesRevenue](/tl/method/account-getpaidmessagesrevenue) | `Account.paidMessagesRevenue` | `0x19ba4a67` |
| [Account.getPasskeys](/tl/method/account-getpasskeys) | `Account.passkeys` | `0xea1f0c52` |
| [Account.getPassword](/tl/method/account-getpassword) | `Account.password` | `0x548a30f5` |
| [Account.getPasswordSettings](/tl/method/account-getpasswordsettings) | `Account.passwordSettings` | `0x9cd4eaf9` |
| [Account.getPrivacy](/tl/method/account-getprivacy) | `Account.privacyRules` | `0xdadbc950` |
| [Account.getReactionsNotifySettings](/tl/method/account-getreactionsnotifysettings) | `ReactionsNotifySettings` | `0x06dd654c` |
| [Account.getRecentEmojiStatuses](/tl/method/account-getrecentemojistatuses) | `Account.emojiStatuses` | `0x0f578105` |
| [Account.getSavedMusicIds](/tl/method/account-getsavedmusicids) | `Account.savedMusicIds` | `0xe09d5faf` |
| [Account.getSavedRingtones](/tl/method/account-getsavedringtones) | `Account.savedRingtones` | `0xe1902288` |
| [Account.getSecureValue](/tl/method/account-getsecurevalue) | `SecureValue` | `0x73665bc2` |
| [Account.getTheme](/tl/method/account-gettheme) | `Theme` | `0x3a5869ec` |
| [Account.getThemes](/tl/method/account-getthemes) | `Account.themes` | `0x7206e458` |
| [Account.getTmpPassword](/tl/method/account-gettmppassword) | `Account.tmpPassword` | `0x449e0b51` |
| [Account.getUniqueGiftChatThemes](/tl/method/account-getuniquegiftchatthemes) | `Account.chatThemes` | `0xe42ce9c9` |
| [Account.getWallPaper](/tl/method/account-getwallpaper) | `WallPaper` | `0xfc8ddbea` |
| [Account.getWallPapers](/tl/method/account-getwallpapers) | `Account.wallPapers` | `0x07967d36` |
| [Account.getWebAuthorizations](/tl/method/account-getwebauthorizations) | `Account.webAuthorizations` | `0x182e6d6f` |
| [Account.initPasskeyRegistration](/tl/method/account-initpasskeyregistration) | `Account.passkeyRegistrationOptions` | `0x429547e8` |
| [Account.initTakeoutSession](/tl/method/account-inittakeoutsession) | `Account.takeout` | `0x8ef3eab0` |
| [Account.installTheme](/tl/method/account-installtheme) | `Bool` | `0xc727bb3b` |
| [Account.installWallPaper](/tl/method/account-installwallpaper) | `Bool` | `0xfeed5769` |
| [Account.invalidateSignInCodes](/tl/method/account-invalidatesignincodes) | `Bool` | `0xca8ae8ba` |
| [Account.registerDevice](/tl/method/account-registerdevice) | `Bool` | `0xec86017a` |
| [Account.registerPasskey](/tl/method/account-registerpasskey) | `Passkey` | `0x55b41fd6` |
| [Account.reorderUsernames](/tl/method/account-reorderusernames) | `Bool` | `0xef500eab` |
| [Account.reportPeer](/tl/method/account-reportpeer) | `Bool` | `0xc5ba3d86` |
| [Account.reportProfilePhoto](/tl/method/account-reportprofilephoto) | `Bool` | `0xfa8cc6f5` |
| [Account.resendPasswordEmail](/tl/method/account-resendpasswordemail) | `Bool` | `0x7a7f2a15` |
| [Account.resetAuthorization](/tl/method/account-resetauthorization) | `Bool` | `0xdf77f3bc` |
| [Account.resetNotifySettings](/tl/method/account-resetnotifysettings) | `Bool` | `0xdb7e1747` |
| [Account.resetPassword](/tl/method/account-resetpassword) | `Account.resetPasswordResult` | `0x9308ce1b` |
| [Account.resetWallPapers](/tl/method/account-resetwallpapers) | `Bool` | `0xbb3b9804` |
| [Account.resetWebAuthorization](/tl/method/account-resetwebauthorization) | `Bool` | `0x2d01b9ef` |
| [Account.resetWebAuthorizations](/tl/method/account-resetwebauthorizations) | `Bool` | `0x682d2594` |
| [Account.resolveBusinessChatLink](/tl/method/account-resolvebusinesschatlink) | `Account.resolvedBusinessChatLinks` | `0x5492e5ee` |
| [Account.saveAutoDownloadSettings](/tl/method/account-saveautodownloadsettings) | `Bool` | `0x76f36233` |
| [Account.saveAutoSaveSettings](/tl/method/account-saveautosavesettings) | `Bool` | `0xd69b8361` |
| [Account.saveMusic](/tl/method/account-savemusic) | `Bool` | `0xb26732a9` |
| [Account.saveRingtone](/tl/method/account-saveringtone) | `Account.savedRingtone` | `0x3dea5b03` |
| [Account.saveSecureValue](/tl/method/account-savesecurevalue) | `SecureValue` | `0x899fe31d` |
| [Account.saveTheme](/tl/method/account-savetheme) | `Bool` | `0xf257106c` |
| [Account.saveWallPaper](/tl/method/account-savewallpaper) | `Bool` | `0x6c5a5b37` |
| [Account.sendChangePhoneCode](/tl/method/account-sendchangephonecode) | `Auth.sentCode` | `0x82574ae5` |
| [Account.sendConfirmPhoneCode](/tl/method/account-sendconfirmphonecode) | `Auth.sentCode` | `0x1b3faa88` |
| [Account.sendVerifyEmailCode](/tl/method/account-sendverifyemailcode) | `Account.sentEmailCode` | `0x98e037bb` |
| [Account.sendVerifyPhoneCode](/tl/method/account-sendverifyphonecode) | `Auth.sentCode` | `0xa5a356f9` |
| [Account.setAccountTTL](/tl/method/account-setaccountttl) | `Bool` | `0x2442485e` |
| [Account.setAuthorizationTTL](/tl/method/account-setauthorizationttl) | `Bool` | `0xbf899aa0` |
| [Account.setContactSignUpNotification](/tl/method/account-setcontactsignupnotification) | `Bool` | `0xcff43f61` |
| [Account.setContentSettings](/tl/method/account-setcontentsettings) | `Bool` | `0xb574b16b` |
| [Account.setGlobalPrivacySettings](/tl/method/account-setglobalprivacysettings) | `GlobalPrivacySettings` | `0x1edaaac2` |
| [Account.setMainProfileTab](/tl/method/account-setmainprofiletab) | `Bool` | `0x5dee78b0` |
| [Account.setPrivacy](/tl/method/account-setprivacy) | `Account.privacyRules` | `0xc9f81ce8` |
| [Account.setReactionsNotifySettings](/tl/method/account-setreactionsnotifysettings) | `ReactionsNotifySettings` | `0x316ce548` |
| [Account.toggleConnectedBotPaused](/tl/method/account-toggleconnectedbotpaused) | `Bool` | `0x646e1097` |
| [Account.toggleNoPaidMessagesException](/tl/method/account-togglenopaidmessagesexception) | `Bool` | `0xfe2eda76` |
| [Account.toggleSponsoredMessages](/tl/method/account-togglesponsoredmessages) | `Bool` | `0xb9d9a38d` |
| [Account.toggleUsername](/tl/method/account-toggleusername) | `Bool` | `0x58d6b376` |
| [Account.unregisterDevice](/tl/method/account-unregisterdevice) | `Bool` | `0x6a0d3206` |
| [Account.updateBirthday](/tl/method/account-updatebirthday) | `Bool` | `0xcc6e0c11` |
| [Account.updateBusinessAwayMessage](/tl/method/account-updatebusinessawaymessage) | `Bool` | `0xa26a7fa5` |
| [Account.updateBusinessGreetingMessage](/tl/method/account-updatebusinessgreetingmessage) | `Bool` | `0x66cdafc4` |
| [Account.updateBusinessIntro](/tl/method/account-updatebusinessintro) | `Bool` | `0xa614d034` |
| [Account.updateBusinessLocation](/tl/method/account-updatebusinesslocation) | `Bool` | `0x9e6b131a` |
| [Account.updateBusinessWorkHours](/tl/method/account-updatebusinessworkhours) | `Bool` | `0x4b00e066` |
| [Account.updateColor](/tl/method/account-updatecolor) | `Bool` | `0x684d214e` |
| [Account.updateConnectedBot](/tl/method/account-updateconnectedbot) | `Updates` | `0x66a08c7e` |
| [Account.updateDeviceLocked](/tl/method/account-updatedevicelocked) | `Bool` | `0x38df3532` |
| [Account.updateEmojiStatus](/tl/method/account-updateemojistatus) | `Bool` | `0xfbd3de6b` |
| [Account.updateNotifySettings](/tl/method/account-updatenotifysettings) | `Bool` | `0x84be5b93` |
| [Account.updatePasswordSettings](/tl/method/account-updatepasswordsettings) | `Bool` | `0xa59b102f` |
| [Account.updatePersonalChannel](/tl/method/account-updatepersonalchannel) | `Bool` | `0xd94305e0` |
| [Account.updateProfile](/tl/method/account-updateprofile) | `User` | `0x78515775` |
| [Account.updateStatus](/tl/method/account-updatestatus) | `Bool` | `0x6628562c` |
| [Account.updateTheme](/tl/method/account-updatetheme) | `Theme` | `0x2bf40ccc` |
| [Account.updateUsername](/tl/method/account-updateusername) | `User` | `0x3e0bdd7c` |
| [Account.uploadRingtone](/tl/method/account-uploadringtone) | `Document` | `0x831a83a2` |
| [Account.uploadTheme](/tl/method/account-uploadtheme) | `Document` | `0x1c3db333` |
| [Account.uploadWallPaper](/tl/method/account-uploadwallpaper) | `WallPaper` | `0xe39a8f03` |
| [Account.verifyEmail](/tl/method/account-verifyemail) | `Account.emailVerified` | `0x032da4cf` |
| [Account.verifyPhone](/tl/method/account-verifyphone) | `Bool` | `0x4dd3a7f6` |

</div>

## aicompose

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Aicompose.createTone](/tl/method/aicompose-createtone) | `AiComposeTone` | `0x4aa83913` |
| [Aicompose.deleteTone](/tl/method/aicompose-deletetone) | `Bool` | `0xdd39316a` |
| [Aicompose.getTone](/tl/method/aicompose-gettone) | `Aicompose.tones` | `0xb2e8ba03` |
| [Aicompose.getToneExample](/tl/method/aicompose-gettoneexample) | `AiComposeToneExample` | `0xd1b4ab14` |
| [Aicompose.getTones](/tl/method/aicompose-gettones) | `Aicompose.tones` | `0xabd59201` |
| [Aicompose.saveTone](/tl/method/aicompose-savetone) | `Bool` | `0x1782cbb1` |
| [Aicompose.updateTone](/tl/method/aicompose-updatetone) | `AiComposeTone` | `0x903bcf59` |

</div>

## auth

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Auth.acceptLoginToken](/tl/method/auth-acceptlogintoken) | `Authorization` | `0xe894ad4d` |
| [Auth.bindTempAuthKey](/tl/method/auth-bindtempauthkey) | `Bool` | `0xcdd42a05` |
| [Auth.cancelCode](/tl/method/auth-cancelcode) | `Bool` | `0x1f040578` |
| [Auth.checkPaidAuth](/tl/method/auth-checkpaidauth) | `Auth.sentCode` | `0x56e59f9c` |
| [Auth.checkPassword](/tl/method/auth-checkpassword) | `Auth.authorization` | `0xd18b4d16` |
| [Auth.checkRecoveryPassword](/tl/method/auth-checkrecoverypassword) | `Bool` | `0x0d36bf79` |
| [Auth.dropTempAuthKeys](/tl/method/auth-droptempauthkeys) | `Bool` | `0x8e48a188` |
| [Auth.exportAuthorization](/tl/method/auth-exportauthorization) | `Auth.exportedAuthorization` | `0xe5bfffcd` |
| [Auth.exportLoginToken](/tl/method/auth-exportlogintoken) | `Auth.loginToken` | `0xb7e085fe` |
| [Auth.finishPasskeyLogin](/tl/method/auth-finishpasskeylogin) | `Auth.authorization` | `0x9857ad07` |
| [Auth.importAuthorization](/tl/method/auth-importauthorization) | `Auth.authorization` | `0xa57a7dad` |
| [Auth.importBotAuthorization](/tl/method/auth-importbotauthorization) | `Auth.authorization` | `0x67a3ff2c` |
| [Auth.importLoginToken](/tl/method/auth-importlogintoken) | `Auth.loginToken` | `0x95ac5ce4` |
| [Auth.importWebTokenAuthorization](/tl/method/auth-importwebtokenauthorization) | `Auth.authorization` | `0x2db873a9` |
| [Auth.initPasskeyLogin](/tl/method/auth-initpasskeylogin) | `Auth.passkeyLoginOptions` | `0x518ad0b7` |
| [Auth.logOut](/tl/method/auth-logout) | `Auth.loggedOut` | `0x3e72ba19` |
| [Auth.recoverPassword](/tl/method/auth-recoverpassword) | `Auth.authorization` | `0x37096c70` |
| [Auth.reportMissingCode](/tl/method/auth-reportmissingcode) | `Bool` | `0xcb9deff6` |
| [Auth.requestFirebaseSms](/tl/method/auth-requestfirebasesms) | `Bool` | `0x8e39261e` |
| [Auth.requestPasswordRecovery](/tl/method/auth-requestpasswordrecovery) | `Auth.passwordRecovery` | `0xd897bc66` |
| [Auth.resendCode](/tl/method/auth-resendcode) | `Auth.sentCode` | `0xcae47523` |
| [Auth.resetAuthorizations](/tl/method/auth-resetauthorizations) | `Bool` | `0x9fab0d1a` |
| [Auth.resetLoginEmail](/tl/method/auth-resetloginemail) | `Auth.sentCode` | `0x7e960193` |
| [Auth.sendCode](/tl/method/auth-sendcode) | `Auth.sentCode` | `0xa677244f` |
| [Auth.signIn](/tl/method/auth-signin) | `Auth.authorization` | `0x8d52a951` |
| [Auth.signUp](/tl/method/auth-signup) | `Auth.authorization` | `0xaac7b717` |

</div>

## bots

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Bots.addPreviewMedia](/tl/method/bots-addpreviewmedia) | `BotPreviewMedia` | `0x17aeb75a` |
| [Bots.allowSendMessage](/tl/method/bots-allowsendmessage) | `Updates` | `0xf132e3ef` |
| [Bots.answerWebhookJSONQuery](/tl/method/bots-answerwebhookjsonquery) | `Bool` | `0xe6213f4d` |
| [Bots.canSendMessage](/tl/method/bots-cansendmessage) | `Bool` | `0x1359f4e6` |
| [Bots.checkDownloadFileParams](/tl/method/bots-checkdownloadfileparams) | `Bool` | `0x50077589` |
| [Bots.checkUsername](/tl/method/bots-checkusername) | `Bool` | `0x87f2219b` |
| [Bots.createBot](/tl/method/bots-createbot) | `User` | `0xe5b17f2b` |
| [Bots.deletePreviewMedia](/tl/method/bots-deletepreviewmedia) | `Bool` | `0x2d0135b3` |
| [Bots.editAccessSettings](/tl/method/bots-editaccesssettings) | `Bool` | `0x31813cd8` |
| [Bots.editPreviewMedia](/tl/method/bots-editpreviewmedia) | `BotPreviewMedia` | `0x8525606f` |
| [Bots.exportBotToken](/tl/method/bots-exportbottoken) | `Bots.exportedBotToken` | `0xbd0d99eb` |
| [Bots.getAccessSettings](/tl/method/bots-getaccesssettings) | `Bots.accessSettings` | `0x213853a3` |
| [Bots.getAdminedBots](/tl/method/bots-getadminedbots) | `User` | `0xb0711d83` |
| [Bots.getBotCommands](/tl/method/bots-getbotcommands) | `BotCommand` | `0xe34c0dd6` |
| [Bots.getBotInfo](/tl/method/bots-getbotinfo) | `Bots.botInfo` | `0xdcd914fd` |
| [Bots.getBotMenuButton](/tl/method/bots-getbotmenubutton) | `BotMenuButton` | `0x9c60eb28` |
| [Bots.getBotRecommendations](/tl/method/bots-getbotrecommendations) | `Users.users` | `0xa1b70815` |
| [Bots.getPopularAppBots](/tl/method/bots-getpopularappbots) | `Bots.popularAppBots` | `0xc2510192` |
| [Bots.getPreviewInfo](/tl/method/bots-getpreviewinfo) | `Bots.previewInfo` | `0x423ab3ad` |
| [Bots.getPreviewMedias](/tl/method/bots-getpreviewmedias) | `BotPreviewMedia` | `0xa2a5594d` |
| [Bots.getRequestedWebViewButton](/tl/method/bots-getrequestedwebviewbutton) | `KeyboardButton` | `0xbf25b7f3` |
| [Bots.invokeWebViewCustomMethod](/tl/method/bots-invokewebviewcustommethod) | `DataJSON` | `0x087fc5e7` |
| [Bots.reorderPreviewMedias](/tl/method/bots-reorderpreviewmedias) | `Bool` | `0xb627f3aa` |
| [Bots.reorderUsernames](/tl/method/bots-reorderusernames) | `Bool` | `0x9709b1c2` |
| [Bots.requestWebViewButton](/tl/method/bots-requestwebviewbutton) | `Bots.requestedButton` | `0x31a2a35e` |
| [Bots.resetBotCommands](/tl/method/bots-resetbotcommands) | `Bool` | `0x3d8de0f9` |
| [Bots.sendCustomRequest](/tl/method/bots-sendcustomrequest) | `DataJSON` | `0xaa2769ed` |
| [Bots.setBotBroadcastDefaultAdminRights](/tl/method/bots-setbotbroadcastdefaultadminrights) | `Bool` | `0x788464e1` |
| [Bots.setBotCommands](/tl/method/bots-setbotcommands) | `Bool` | `0x0517165a` |
| [Bots.setBotGroupDefaultAdminRights](/tl/method/bots-setbotgroupdefaultadminrights) | `Bool` | `0x925ec9ea` |
| [Bots.setBotInfo](/tl/method/bots-setbotinfo) | `Bool` | `0x10cf3123` |
| [Bots.setBotMenuButton](/tl/method/bots-setbotmenubutton) | `Bool` | `0x4504d54f` |
| [Bots.setCustomVerification](/tl/method/bots-setcustomverification) | `Bool` | `0x8b89dfbd` |
| [Bots.toggleUserEmojiStatusPermission](/tl/method/bots-toggleuseremojistatuspermission) | `Bool` | `0x06de6392` |
| [Bots.toggleUsername](/tl/method/bots-toggleusername) | `Bool` | `0x053ca973` |
| [Bots.updateStarRefProgram](/tl/method/bots-updatestarrefprogram) | `StarRefProgram` | `0x778b5ab3` |
| [Bots.updateUserEmojiStatus](/tl/method/bots-updateuseremojistatus) | `Bool` | `0xed9f30c5` |

</div>

## channels

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Channels.checkSearchPostsFlood](/tl/method/channels-checksearchpostsflood) | `SearchPostsFlood` | `0x22567115` |
| [Channels.checkUsername](/tl/method/channels-checkusername) | `Bool` | `0x10e6bd2c` |
| [Channels.convertToGigagroup](/tl/method/channels-converttogigagroup) | `Updates` | `0x0b290c69` |
| [Channels.createChannel](/tl/method/channels-createchannel) | `Updates` | `0x91006707` |
| [Channels.deactivateAllUsernames](/tl/method/channels-deactivateallusernames) | `Bool` | `0x0a245dd3` |
| [Channels.deleteChannel](/tl/method/channels-deletechannel) | `Updates` | `0xc0111fe3` |
| [Channels.deleteHistory](/tl/method/channels-deletehistory) | `Updates` | `0x9baa9647` |
| [Channels.deleteMessages](/tl/method/channels-deletemessages) | `Messages.affectedMessages` | `0x84c1fd4e` |
| [Channels.deleteParticipantHistory](/tl/method/channels-deleteparticipanthistory) | `Messages.affectedHistory` | `0x367544db` |
| [Channels.editAdmin](/tl/method/channels-editadmin) | `Updates` | `0x9a98ad68` |
| [Channels.editBanned](/tl/method/channels-editbanned) | `Updates` | `0x96e6cd81` |
| [Channels.editLocation](/tl/method/channels-editlocation) | `Bool` | `0x58e63f6d` |
| [Channels.editPhoto](/tl/method/channels-editphoto) | `Updates` | `0xf12e57c9` |
| [Channels.editTitle](/tl/method/channels-edittitle) | `Updates` | `0x566decd0` |
| [Channels.exportMessageLink](/tl/method/channels-exportmessagelink) | `ExportedMessageLink` | `0xe63fadeb` |
| [Channels.getAdminLog](/tl/method/channels-getadminlog) | `Channels.adminLogResults` | `0x33ddf480` |
| [Channels.getAdminedPublicChannels](/tl/method/channels-getadminedpublicchannels) | `Messages.chats` | `0xf8b036af` |
| [Channels.getChannelRecommendations](/tl/method/channels-getchannelrecommendations) | `Messages.chats` | `0x25a71742` |
| [Channels.getChannels](/tl/method/channels-getchannels) | `Messages.chats` | `0x0a7f6bbb` |
| [Channels.getFullChannel](/tl/method/channels-getfullchannel) | `Messages.chatFull` | `0x08736a09` |
| [Channels.getGroupsForDiscussion](/tl/method/channels-getgroupsfordiscussion) | `Messages.chats` | `0xf5dad378` |
| [Channels.getInactiveChannels](/tl/method/channels-getinactivechannels) | `Messages.inactiveChats` | `0x11e831ee` |
| [Channels.getLeftChannels](/tl/method/channels-getleftchannels) | `Messages.chats` | `0x8341ecc0` |
| [Channels.getMessageAuthor](/tl/method/channels-getmessageauthor) | `User` | `0xece2a0e6` |
| [Channels.getMessages](/tl/method/channels-getmessages) | `Messages.messages` | `0xad8c9a23` |
| [Channels.getParticipant](/tl/method/channels-getparticipant) | `Channels.channelParticipant` | `0xa0ab6cc6` |
| [Channels.getParticipants](/tl/method/channels-getparticipants) | `Channels.channelParticipants` | `0x77ced9d0` |
| [Channels.getSendAs](/tl/method/channels-getsendas) | `Channels.sendAsPeers` | `0xe785a43f` |
| [Channels.inviteToChannel](/tl/method/channels-invitetochannel) | `Messages.invitedUsers` | `0xc9e33d54` |
| [Channels.joinChannel](/tl/method/channels-joinchannel) | `Updates` | `0x24b524c5` |
| [Channels.leaveChannel](/tl/method/channels-leavechannel) | `Updates` | `0xf836aa95` |
| [Channels.readHistory](/tl/method/channels-readhistory) | `Bool` | `0xcc104937` |
| [Channels.readMessageContents](/tl/method/channels-readmessagecontents) | `Bool` | `0xeab5dc38` |
| [Channels.reorderUsernames](/tl/method/channels-reorderusernames) | `Bool` | `0xb45ced1d` |
| [Channels.reportAntiSpamFalsePositive](/tl/method/channels-reportantispamfalsepositive) | `Bool` | `0xa850a693` |
| [Channels.reportSpam](/tl/method/channels-reportspam) | `Bool` | `0xf44a8315` |
| [Channels.restrictSponsoredMessages](/tl/method/channels-restrictsponsoredmessages) | `Updates` | `0x9ae91519` |
| [Channels.searchPosts](/tl/method/channels-searchposts) | `Messages.messages` | `0xf2c4f24d` |
| [Channels.setBoostsToUnblockRestrictions](/tl/method/channels-setbooststounblockrestrictions) | `Updates` | `0xad399cee` |
| [Channels.setDiscussionGroup](/tl/method/channels-setdiscussiongroup) | `Bool` | `0x40582bb2` |
| [Channels.setEmojiStickers](/tl/method/channels-setemojistickers) | `Bool` | `0x3cd930b7` |
| [Channels.setMainProfileTab](/tl/method/channels-setmainprofiletab) | `Bool` | `0x3583fcb1` |
| [Channels.setStickers](/tl/method/channels-setstickers) | `Bool` | `0xea8ca4f9` |
| [Channels.toggleAntiSpam](/tl/method/channels-toggleantispam) | `Updates` | `0x68f3e4eb` |
| [Channels.toggleAutotranslation](/tl/method/channels-toggleautotranslation) | `Updates` | `0x167fc0a1` |
| [Channels.toggleForum](/tl/method/channels-toggleforum) | `Updates` | `0x3ff75734` |
| [Channels.toggleJoinRequest](/tl/method/channels-togglejoinrequest) | `Updates` | `0x4c2985b6` |
| [Channels.toggleJoinToSend](/tl/method/channels-togglejointosend) | `Updates` | `0xe4cb9580` |
| [Channels.toggleParticipantsHidden](/tl/method/channels-toggleparticipantshidden) | `Updates` | `0x6a6e7854` |
| [Channels.togglePreHistoryHidden](/tl/method/channels-toggleprehistoryhidden) | `Updates` | `0xeabbb94c` |
| [Channels.toggleSignatures](/tl/method/channels-togglesignatures) | `Updates` | `0x418d549c` |
| [Channels.toggleSlowMode](/tl/method/channels-toggleslowmode) | `Updates` | `0xedd49ef0` |
| [Channels.toggleUsername](/tl/method/channels-toggleusername) | `Bool` | `0x50f24105` |
| [Channels.toggleViewForumAsMessages](/tl/method/channels-toggleviewforumasmessages) | `Updates` | `0x9738bb15` |
| [Channels.updateColor](/tl/method/channels-updatecolor) | `Updates` | `0xd8aa3671` |
| [Channels.updateEmojiStatus](/tl/method/channels-updateemojistatus) | `Updates` | `0xf0d3e6a8` |
| [Channels.updatePaidMessagesPrice](/tl/method/channels-updatepaidmessagesprice) | `Updates` | `0x4b12327b` |
| [Channels.updateUsername](/tl/method/channels-updateusername) | `Bool` | `0x3514b3de` |

</div>

## chatlists

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Chatlists.checkChatlistInvite](/tl/method/chatlists-checkchatlistinvite) | `Chatlists.chatlistInvite` | `0x41c10fff` |
| [Chatlists.deleteExportedInvite](/tl/method/chatlists-deleteexportedinvite) | `Bool` | `0x719c5c5e` |
| [Chatlists.editExportedInvite](/tl/method/chatlists-editexportedinvite) | `ExportedChatlistInvite` | `0x653db63d` |
| [Chatlists.exportChatlistInvite](/tl/method/chatlists-exportchatlistinvite) | `Chatlists.exportedChatlistInvite` | `0x8472478e` |
| [Chatlists.getChatlistUpdates](/tl/method/chatlists-getchatlistupdates) | `Chatlists.chatlistUpdates` | `0x89419521` |
| [Chatlists.getExportedInvites](/tl/method/chatlists-getexportedinvites) | `Chatlists.exportedInvites` | `0xce03da83` |
| [Chatlists.getLeaveChatlistSuggestions](/tl/method/chatlists-getleavechatlistsuggestions) | `Peer` | `0xfdbcd714` |
| [Chatlists.hideChatlistUpdates](/tl/method/chatlists-hidechatlistupdates) | `Bool` | `0x66e486fb` |
| [Chatlists.joinChatlistInvite](/tl/method/chatlists-joinchatlistinvite) | `Updates` | `0xa6b1e39a` |
| [Chatlists.joinChatlistUpdates](/tl/method/chatlists-joinchatlistupdates) | `Updates` | `0xe089f8f5` |
| [Chatlists.leaveChatlist](/tl/method/chatlists-leavechatlist) | `Updates` | `0x74fae13a` |

</div>

## contacts

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Contacts.acceptContact](/tl/method/contacts-acceptcontact) | `Updates` | `0xf831a20f` |
| [Contacts.addContact](/tl/method/contacts-addcontact) | `Updates` | `0xd9ba2e54` |
| [Contacts.block](/tl/method/contacts-block) | `Bool` | `0x2e2e8734` |
| [Contacts.blockFromReplies](/tl/method/contacts-blockfromreplies) | `Updates` | `0x29a8962c` |
| [Contacts.deleteByPhones](/tl/method/contacts-deletebyphones) | `Bool` | `0x1013fd9e` |
| [Contacts.deleteContacts](/tl/method/contacts-deletecontacts) | `Updates` | `0x096a0e00` |
| [Contacts.editCloseFriends](/tl/method/contacts-editclosefriends) | `Bool` | `0xba6705f0` |
| [Contacts.exportContactToken](/tl/method/contacts-exportcontacttoken) | `ExportedContactToken` | `0xf8654027` |
| [Contacts.getBirthdays](/tl/method/contacts-getbirthdays) | `Contacts.contactBirthdays` | `0xdaeda864` |
| [Contacts.getBlocked](/tl/method/contacts-getblocked) | `Contacts.blocked` | `0x9a868f80` |
| [Contacts.getContactIDs](/tl/method/contacts-getcontactids) | `Int` | `0x7adc669d` |
| [Contacts.getContacts](/tl/method/contacts-getcontacts) | `Contacts.contacts` | `0x5dd69e12` |
| [Contacts.getLocated](/tl/method/contacts-getlocated) | `Updates` | `0xd348bc44` |
| [Contacts.getSaved](/tl/method/contacts-getsaved) | `SavedContact` | `0x82f1e39f` |
| [Contacts.getSponsoredPeers](/tl/method/contacts-getsponsoredpeers) | `Contacts.sponsoredPeers` | `0xb6c8c393` |
| [Contacts.getStatuses](/tl/method/contacts-getstatuses) | `ContactStatus` | `0xc4a353ee` |
| [Contacts.getTopPeers](/tl/method/contacts-gettoppeers) | `Contacts.topPeers` | `0x973478b6` |
| [Contacts.importContactToken](/tl/method/contacts-importcontacttoken) | `User` | `0x13005788` |
| [Contacts.importContacts](/tl/method/contacts-importcontacts) | `Contacts.importedContacts` | `0x2c800be5` |
| [Contacts.resetSaved](/tl/method/contacts-resetsaved) | `Bool` | `0x879537f1` |
| [Contacts.resetTopPeerRating](/tl/method/contacts-resettoppeerrating) | `Bool` | `0x1ae373ac` |
| [Contacts.resolvePhone](/tl/method/contacts-resolvephone) | `Contacts.resolvedPeer` | `0x8af94344` |
| [Contacts.resolveUsername](/tl/method/contacts-resolveusername) | `Contacts.resolvedPeer` | `0x725afbbc` |
| [Contacts.search](/tl/method/contacts-search) | `Contacts.found` | `0x11f812d8` |
| [Contacts.setBlocked](/tl/method/contacts-setblocked) | `Bool` | `0x94c65c76` |
| [Contacts.toggleTopPeers](/tl/method/contacts-toggletoppeers) | `Bool` | `0x8514bdda` |
| [Contacts.unblock](/tl/method/contacts-unblock) | `Bool` | `0xb550d328` |
| [Contacts.updateContactNote](/tl/method/contacts-updatecontactnote) | `Bool` | `0x139f63fb` |

</div>

## folders

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Folders.editPeerFolders](/tl/method/folders-editpeerfolders) | `Updates` | `0x6847d0ab` |

</div>

## fragment

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Fragment.getCollectibleInfo](/tl/method/fragment-getcollectibleinfo) | `Fragment.collectibleInfo` | `0xbe1e85ba` |

</div>

## help

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Help.acceptTermsOfService](/tl/method/help-accepttermsofservice) | `Bool` | `0xee72f79a` |
| [Help.dismissSuggestion](/tl/method/help-dismisssuggestion) | `Bool` | `0xf50dbaa1` |
| [Help.editUserInfo](/tl/method/help-edituserinfo) | `Help.userInfo` | `0x66b91b70` |
| [Help.getAppConfig](/tl/method/help-getappconfig) | `Help.appConfig` | `0x61e3f854` |
| [Help.getAppUpdate](/tl/method/help-getappupdate) | `Help.appUpdate` | `0x522d5a7d` |
| [Help.getCDNConfig](/tl/method/help-getcdnconfig) | `CDNConfig` | `0x52029342` |
| [Help.getConfig](/tl/method/help-getconfig) | `Config` | `0xc4f9186b` |
| [Help.getCountriesList](/tl/method/help-getcountrieslist) | `Help.countriesList` | `0x735787a8` |
| [Help.getDeepLinkInfo](/tl/method/help-getdeeplinkinfo) | `Help.deepLinkInfo` | `0x3fedc75f` |
| [Help.getInviteText](/tl/method/help-getinvitetext) | `Help.inviteText` | `0x4d392343` |
| [Help.getNearestDC](/tl/method/help-getnearestdc) | `NearestDC` | `0x1fb33026` |
| [Help.getPassportConfig](/tl/method/help-getpassportconfig) | `Help.passportConfig` | `0xc661ad08` |
| [Help.getPeerColors](/tl/method/help-getpeercolors) | `Help.peerColors` | `0xda80f42f` |
| [Help.getPeerProfileColors](/tl/method/help-getpeerprofilecolors) | `Help.peerColors` | `0xabcfa9fd` |
| [Help.getPremiumPromo](/tl/method/help-getpremiumpromo) | `Help.premiumPromo` | `0xb81b93d4` |
| [Help.getPromoData](/tl/method/help-getpromodata) | `Help.promoData` | `0xc0977421` |
| [Help.getRecentMeUrls](/tl/method/help-getrecentmeurls) | `Help.recentMeUrls` | `0x3dc0f114` |
| [Help.getSupport](/tl/method/help-getsupport) | `Help.support` | `0x9cdf08cd` |
| [Help.getSupportName](/tl/method/help-getsupportname) | `Help.supportName` | `0xd360e72c` |
| [Help.getTermsOfServiceUpdate](/tl/method/help-gettermsofserviceupdate) | `Help.termsOfServiceUpdate` | `0x2ca51fd1` |
| [Help.getTimezonesList](/tl/method/help-gettimezoneslist) | `Help.timezonesList` | `0x49b30240` |
| [Help.getUserInfo](/tl/method/help-getuserinfo) | `Help.userInfo` | `0x038a08d3` |
| [Help.hidePromoData](/tl/method/help-hidepromodata) | `Bool` | `0x1e251c95` |
| [Help.saveAppLog](/tl/method/help-saveapplog) | `Bool` | `0x6f02f748` |
| [Help.setBotUpdatesStatus](/tl/method/help-setbotupdatesstatus) | `Bool` | `0xec22cfcd` |

</div>

## langpack

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Langpack.getDifference](/tl/method/langpack-getdifference) | `LangPackDifference` | `0xcd984aa5` |
| [Langpack.getLangPack](/tl/method/langpack-getlangpack) | `LangPackDifference` | `0xf2f2330a` |
| [Langpack.getLanguage](/tl/method/langpack-getlanguage) | `LangPackLanguage` | `0x6a596502` |
| [Langpack.getLanguages](/tl/method/langpack-getlanguages) | `LangPackLanguage` | `0x42c6978f` |
| [Langpack.getStrings](/tl/method/langpack-getstrings) | `LangPackString` | `0xefea3803` |

</div>

## messages

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Messages.acceptEncryption](/tl/method/messages-acceptencryption) | `EncryptedChat` | `0x3dbc0415` |
| [Messages.acceptURLAuth](/tl/method/messages-accepturlauth) | `URLAuthResult` | `0x67a3f0de` |
| [Messages.addChatUser](/tl/method/messages-addchatuser) | `Messages.invitedUsers` | `0xcbc6d107` |
| [Messages.addPollAnswer](/tl/method/messages-addpollanswer) | `Updates` | `0x19bc4b6d` |
| [Messages.appendTodoList](/tl/method/messages-appendtodolist) | `Updates` | `0x21a61057` |
| [Messages.checkChatInvite](/tl/method/messages-checkchatinvite) | `ChatInvite` | `0x3eadb1bb` |
| [Messages.checkHistoryImport](/tl/method/messages-checkhistoryimport) | `Messages.historyImportParsed` | `0x43fe19f3` |
| [Messages.checkHistoryImportPeer](/tl/method/messages-checkhistoryimportpeer) | `Messages.checkedHistoryImportPeer` | `0x5dc60f03` |
| [Messages.checkQuickReplyShortcut](/tl/method/messages-checkquickreplyshortcut) | `Bool` | `0xf1d0fbd3` |
| [Messages.checkURLAuthMatchCode](/tl/method/messages-checkurlauthmatchcode) | `Bool` | `0xc9a47b0b` |
| [Messages.clearAllDrafts](/tl/method/messages-clearalldrafts) | `Bool` | `0x7e58ee9c` |
| [Messages.clearRecentReactions](/tl/method/messages-clearrecentreactions) | `Bool` | `0x9dfeefb4` |
| [Messages.clearRecentStickers](/tl/method/messages-clearrecentstickers) | `Bool` | `0x8999602d` |
| [Messages.clickSponsoredMessage](/tl/method/messages-clicksponsoredmessage) | `Bool` | `0x8235057e` |
| [Messages.composeMessageWithAi](/tl/method/messages-composemessagewithai) | `Messages.composedMessageWithAi` | `0xdaecc589` |
| [Messages.createChat](/tl/method/messages-createchat) | `Messages.invitedUsers` | `0x92ceddd4` |
| [Messages.createForumTopic](/tl/method/messages-createforumtopic) | `Updates` | `0x2f98c3d5` |
| [Messages.declineURLAuth](/tl/method/messages-declineurlauth) | `Bool` | `0x35436bbc` |
| [Messages.deleteChat](/tl/method/messages-deletechat) | `Bool` | `0x5bd0ee50` |
| [Messages.deleteChatUser](/tl/method/messages-deletechatuser) | `Updates` | `0xa2185cab` |
| [Messages.deleteExportedChatInvite](/tl/method/messages-deleteexportedchatinvite) | `Bool` | `0xd464a42b` |
| [Messages.deleteFactCheck](/tl/method/messages-deletefactcheck) | `Updates` | `0xd1da940c` |
| [Messages.deleteHistory](/tl/method/messages-deletehistory) | `Messages.affectedHistory` | `0xb08f922a` |
| [Messages.deleteMessages](/tl/method/messages-deletemessages) | `Messages.affectedMessages` | `0xe58e95d2` |
| [Messages.deleteParticipantReaction](/tl/method/messages-deleteparticipantreaction) | `Updates` | `0xe3b7f82c` |
| [Messages.deleteParticipantReactions](/tl/method/messages-deleteparticipantreactions) | `Bool` | `0xa0b80cf8` |
| [Messages.deletePhoneCallHistory](/tl/method/messages-deletephonecallhistory) | `Messages.affectedFoundMessages` | `0xf9cbe409` |
| [Messages.deletePollAnswer](/tl/method/messages-deletepollanswer) | `Updates` | `0xac8505a5` |
| [Messages.deleteQuickReplyMessages](/tl/method/messages-deletequickreplymessages) | `Updates` | `0xe105e910` |
| [Messages.deleteQuickReplyShortcut](/tl/method/messages-deletequickreplyshortcut) | `Bool` | `0x3cc04740` |
| [Messages.deleteRevokedExportedChatInvites](/tl/method/messages-deleterevokedexportedchatinvites) | `Bool` | `0x56987bd5` |
| [Messages.deleteSavedHistory](/tl/method/messages-deletesavedhistory) | `Messages.affectedHistory` | `0x4dc5085f` |
| [Messages.deleteScheduledMessages](/tl/method/messages-deletescheduledmessages) | `Updates` | `0x59ae2b16` |
| [Messages.deleteTopicHistory](/tl/method/messages-deletetopichistory) | `Messages.affectedHistory` | `0xd2816f10` |
| [Messages.discardEncryption](/tl/method/messages-discardencryption) | `Bool` | `0xf393aea0` |
| [Messages.editChatAbout](/tl/method/messages-editchatabout) | `Bool` | `0xdef60797` |
| [Messages.editChatAdmin](/tl/method/messages-editchatadmin) | `Bool` | `0xa85bd1c2` |
| [Messages.editChatCreator](/tl/method/messages-editchatcreator) | `Updates` | `0xf743b857` |
| [Messages.editChatDefaultBannedRights](/tl/method/messages-editchatdefaultbannedrights) | `Updates` | `0xa5866b41` |
| [Messages.editChatParticipantRank](/tl/method/messages-editchatparticipantrank) | `Updates` | `0xa00f32b0` |
| [Messages.editChatPhoto](/tl/method/messages-editchatphoto) | `Updates` | `0x35ddd674` |
| [Messages.editChatTitle](/tl/method/messages-editchattitle) | `Updates` | `0x73783ffd` |
| [Messages.editExportedChatInvite](/tl/method/messages-editexportedchatinvite) | `Messages.exportedChatInvite` | `0xbdca2f75` |
| [Messages.editFactCheck](/tl/method/messages-editfactcheck) | `Updates` | `0x0589ee75` |
| [Messages.editForumTopic](/tl/method/messages-editforumtopic) | `Updates` | `0xcecc1134` |
| [Messages.editInlineBotMessage](/tl/method/messages-editinlinebotmessage) | `Bool` | `0x83557dba` |
| [Messages.editMessage](/tl/method/messages-editmessage) | `Updates` | `0x51e842e1` |
| [Messages.editQuickReplyShortcut](/tl/method/messages-editquickreplyshortcut) | `Bool` | `0x5c003cef` |
| [Messages.exportChatInvite](/tl/method/messages-exportchatinvite) | `ExportedChatInvite` | `0xa455de90` |
| [Messages.faveSticker](/tl/method/messages-favesticker) | `Bool` | `0xb9ffc55b` |
| [Messages.forwardMessages](/tl/method/messages-forwardmessages) | `Updates` | `0x13704a7c` |
| [Messages.getAdminsWithInvites](/tl/method/messages-getadminswithinvites) | `Messages.chatAdminsWithInvites` | `0x3920e6ef` |
| [Messages.getAllDrafts](/tl/method/messages-getalldrafts) | `Updates` | `0x6a3f8d65` |
| [Messages.getAllStickers](/tl/method/messages-getallstickers) | `Messages.allStickers` | `0xb8a0a1a8` |
| [Messages.getArchivedStickers](/tl/method/messages-getarchivedstickers) | `Messages.archivedStickers` | `0x57f17692` |
| [Messages.getAttachMenuBot](/tl/method/messages-getattachmenubot) | `AttachMenuBotsBot` | `0x77216192` |
| [Messages.getAttachMenuBots](/tl/method/messages-getattachmenubots) | `AttachMenuBots` | `0x16fcc2cb` |
| [Messages.getAttachedStickers](/tl/method/messages-getattachedstickers) | `StickerSetCovered` | `0xcc5b67cc` |
| [Messages.getAvailableEffects](/tl/method/messages-getavailableeffects) | `Messages.availableEffects` | `0xdea20a39` |
| [Messages.getAvailableReactions](/tl/method/messages-getavailablereactions) | `Messages.availableReactions` | `0x18dea0ac` |
| [Messages.getBotApp](/tl/method/messages-getbotapp) | `Messages.botApp` | `0x34fdc5c3` |
| [Messages.getBotCallbackAnswer](/tl/method/messages-getbotcallbackanswer) | `Messages.botCallbackAnswer` | `0x9342ca07` |
| [Messages.getChatInviteImporters](/tl/method/messages-getchatinviteimporters) | `Messages.chatInviteImporters` | `0xdf04dd4e` |
| [Messages.getChats](/tl/method/messages-getchats) | `Messages.chats` | `0x49e9528f` |
| [Messages.getCommonChats](/tl/method/messages-getcommonchats) | `Messages.chats` | `0xe40ca104` |
| [Messages.getCustomEmojiDocuments](/tl/method/messages-getcustomemojidocuments) | `Document` | `0xd9ab0f54` |
| [Messages.getDefaultHistoryTTL](/tl/method/messages-getdefaulthistoryttl) | `DefaultHistoryTTL` | `0x658b7188` |
| [Messages.getDefaultTagReactions](/tl/method/messages-getdefaulttagreactions) | `Messages.reactions` | `0xbdf93428` |
| [Messages.getDHConfig](/tl/method/messages-getdhconfig) | `Messages.dhConfig` | `0x26cf8950` |
| [Messages.getDialogFilters](/tl/method/messages-getdialogfilters) | `Messages.dialogFilters` | `0xefd48c89` |
| [Messages.getDialogUnreadMarks](/tl/method/messages-getdialogunreadmarks) | `DialogPeer` | `0x21202222` |
| [Messages.getDialogs](/tl/method/messages-getdialogs) | `Messages.dialogs` | `0xa0f4cb4f` |
| [Messages.getDiscussionMessage](/tl/method/messages-getdiscussionmessage) | `Messages.discussionMessage` | `0x446972fd` |
| [Messages.getDocumentByHash](/tl/method/messages-getdocumentbyhash) | `Document` | `0xb1f2061f` |
| [Messages.getEmojiGameInfo](/tl/method/messages-getemojigameinfo) | `Messages.emojiGameInfo` | `0xfb7e8ca7` |
| [Messages.getEmojiGroups](/tl/method/messages-getemojigroups) | `Messages.emojiGroups` | `0x7488ce5b` |
| [Messages.getEmojiKeywords](/tl/method/messages-getemojikeywords) | `EmojiKeywordsDifference` | `0x35a0e062` |
| [Messages.getEmojiKeywordsDifference](/tl/method/messages-getemojikeywordsdifference) | `EmojiKeywordsDifference` | `0x1508b6af` |
| [Messages.getEmojiKeywordsLanguages](/tl/method/messages-getemojikeywordslanguages) | `EmojiLanguage` | `0x4e9963b2` |
| [Messages.getEmojiProfilePhotoGroups](/tl/method/messages-getemojiprofilephotogroups) | `Messages.emojiGroups` | `0x21a548f3` |
| [Messages.getEmojiStatusGroups](/tl/method/messages-getemojistatusgroups) | `Messages.emojiGroups` | `0x2ecd56cd` |
| [Messages.getEmojiStickerGroups](/tl/method/messages-getemojistickergroups) | `Messages.emojiGroups` | `0x1dd840f5` |
| [Messages.getEmojiStickers](/tl/method/messages-getemojistickers) | `Messages.allStickers` | `0xfbfca18f` |
| [Messages.getEmojiURL](/tl/method/messages-getemojiurl) | `EmojiURL` | `0xd5b10c26` |
| [Messages.getExportedChatInvite](/tl/method/messages-getexportedchatinvite) | `Messages.exportedChatInvite` | `0x73746f5c` |
| [Messages.getExportedChatInvites](/tl/method/messages-getexportedchatinvites) | `Messages.exportedChatInvites` | `0xa2b5a3f6` |
| [Messages.getExtendedMedia](/tl/method/messages-getextendedmedia) | `Updates` | `0x84f80814` |
| [Messages.getFactCheck](/tl/method/messages-getfactcheck) | `FactCheck` | `0xb9cdc5ee` |
| [Messages.getFavedStickers](/tl/method/messages-getfavedstickers) | `Messages.favedStickers` | `0x04f1aaa9` |
| [Messages.getFeaturedEmojiStickers](/tl/method/messages-getfeaturedemojistickers) | `Messages.featuredStickers` | `0x0ecf6736` |
| [Messages.getFeaturedStickers](/tl/method/messages-getfeaturedstickers) | `Messages.featuredStickers` | `0x64780b14` |
| [Messages.getForumTopics](/tl/method/messages-getforumtopics) | `Messages.forumTopics` | `0x3ba47bff` |
| [Messages.getForumTopicsByID](/tl/method/messages-getforumtopicsbyid) | `Messages.forumTopics` | `0xaf0a4a08` |
| [Messages.getFullChat](/tl/method/messages-getfullchat) | `Messages.chatFull` | `0xaeb00b34` |
| [Messages.getFutureChatCreatorAfterLeave](/tl/method/messages-getfuturechatcreatorafterleave) | `User` | `0x3b7d0ea6` |
| [Messages.getGameHighScores](/tl/method/messages-getgamehighscores) | `Messages.highScores` | `0xe822649d` |
| [Messages.getHistory](/tl/method/messages-gethistory) | `Messages.messages` | `0x4423e6c5` |
| [Messages.getInlineBotResults](/tl/method/messages-getinlinebotresults) | `Messages.botResults` | `0x514e999d` |
| [Messages.getInlineGameHighScores](/tl/method/messages-getinlinegamehighscores) | `Messages.highScores` | `0x0f635e1b` |
| [Messages.getMaskStickers](/tl/method/messages-getmaskstickers) | `Messages.allStickers` | `0x640f82b8` |
| [Messages.getMessageEditData](/tl/method/messages-getmessageeditdata) | `Messages.messageEditData` | `0xfda68d36` |
| [Messages.getMessageReactionsList](/tl/method/messages-getmessagereactionslist) | `Messages.messageReactionsList` | `0x461b3f48` |
| [Messages.getMessageReadParticipants](/tl/method/messages-getmessagereadparticipants) | `ReadParticipantDate` | `0x31c1c44f` |
| [Messages.getMessages](/tl/method/messages-getmessages) | `Messages.messages` | `0x63c66506` |
| [Messages.getMessagesReactions](/tl/method/messages-getmessagesreactions) | `Updates` | `0x8bba90e6` |
| [Messages.getMessagesViews](/tl/method/messages-getmessagesviews) | `Messages.messageViews` | `0x5784d3e1` |
| [Messages.getMyStickers](/tl/method/messages-getmystickers) | `Messages.myStickers` | `0xd0b5e1fc` |
| [Messages.getOldFeaturedStickers](/tl/method/messages-getoldfeaturedstickers) | `Messages.featuredStickers` | `0x7ed094a1` |
| [Messages.getOnlines](/tl/method/messages-getonlines) | `ChatOnlines` | `0x6e2be050` |
| [Messages.getOutboxReadDate](/tl/method/messages-getoutboxreaddate) | `OutboxReadDate` | `0x8c4bfe5d` |
| [Messages.getPaidReactionPrivacy](/tl/method/messages-getpaidreactionprivacy) | `Updates` | `0x472455aa` |
| [Messages.getPeerDialogs](/tl/method/messages-getpeerdialogs) | `Messages.peerDialogs` | `0xe470bcfd` |
| [Messages.getPeerSettings](/tl/method/messages-getpeersettings) | `Messages.peerSettings` | `0xefd9a6a2` |
| [Messages.getPersonalChannelHistory](/tl/method/messages-getpersonalchannelhistory) | `Messages.messages` | `0x55fb0996` |
| [Messages.getPinnedDialogs](/tl/method/messages-getpinneddialogs) | `Messages.peerDialogs` | `0xd6b94df2` |
| [Messages.getPinnedSavedDialogs](/tl/method/messages-getpinnedsaveddialogs) | `Messages.savedDialogs` | `0xd63d94e0` |
| [Messages.getPollResults](/tl/method/messages-getpollresults) | `Updates` | `0xeda3e33b` |
| [Messages.getPollVotes](/tl/method/messages-getpollvotes) | `Messages.votesList` | `0xb86e380e` |
| [Messages.getPreparedInlineMessage](/tl/method/messages-getpreparedinlinemessage) | `Messages.preparedInlineMessage` | `0x857ebdb8` |
| [Messages.getQuickReplies](/tl/method/messages-getquickreplies) | `Messages.quickReplies` | `0xd483f2a8` |
| [Messages.getQuickReplyMessages](/tl/method/messages-getquickreplymessages) | `Messages.messages` | `0x94a495c3` |
| [Messages.getRecentLocations](/tl/method/messages-getrecentlocations) | `Messages.messages` | `0x702a40e0` |
| [Messages.getRecentReactions](/tl/method/messages-getrecentreactions) | `Messages.reactions` | `0x39461db2` |
| [Messages.getRecentStickers](/tl/method/messages-getrecentstickers) | `Messages.recentStickers` | `0x9da9403b` |
| [Messages.getReplies](/tl/method/messages-getreplies) | `Messages.messages` | `0x22ddd30c` |
| [Messages.getSavedDialogs](/tl/method/messages-getsaveddialogs) | `Messages.savedDialogs` | `0x1e91fc99` |
| [Messages.getSavedDialogsByID](/tl/method/messages-getsaveddialogsbyid) | `Messages.savedDialogs` | `0x6f6f9c96` |
| [Messages.getSavedGifs](/tl/method/messages-getsavedgifs) | `Messages.savedGifs` | `0x5cf09635` |
| [Messages.getSavedHistory](/tl/method/messages-getsavedhistory) | `Messages.messages` | `0x998ab009` |
| [Messages.getSavedReactionTags](/tl/method/messages-getsavedreactiontags) | `Messages.savedReactionTags` | `0x3637e05b` |
| [Messages.getScheduledHistory](/tl/method/messages-getscheduledhistory) | `Messages.messages` | `0xf516760b` |
| [Messages.getScheduledMessages](/tl/method/messages-getscheduledmessages) | `Messages.messages` | `0xbdbb0464` |
| [Messages.getSearchCounters](/tl/method/messages-getsearchcounters) | `Messages.searchCounter` | `0x1bbcf300` |
| [Messages.getSearchResultsCalendar](/tl/method/messages-getsearchresultscalendar) | `Messages.searchResultsCalendar` | `0x6aa3f6bd` |
| [Messages.getSearchResultsPositions](/tl/method/messages-getsearchresultspositions) | `Messages.searchResultsPositions` | `0x9c7f2f10` |
| [Messages.getSplitRanges](/tl/method/messages-getsplitranges) | `MessageRange` | `0x1cff7e08` |
| [Messages.getSponsoredMessages](/tl/method/messages-getsponsoredmessages) | `Messages.sponsoredMessages` | `0x3d6ce850` |
| [Messages.getStickerSet](/tl/method/messages-getstickerset) | `Messages.stickerSet` | `0xc8a0ec74` |
| [Messages.getStickers](/tl/method/messages-getstickers) | `Messages.stickers` | `0xd5a5d3a1` |
| [Messages.getSuggestedDialogFilters](/tl/method/messages-getsuggesteddialogfilters) | `DialogFilterSuggested` | `0xa29cd42c` |
| [Messages.getTopReactions](/tl/method/messages-gettopreactions) | `Messages.reactions` | `0xbb8125ba` |
| [Messages.getUnreadMentions](/tl/method/messages-getunreadmentions) | `Messages.messages` | `0xf107e790` |
| [Messages.getUnreadPollVotes](/tl/method/messages-getunreadpollvotes) | `Messages.messages` | `0x43286cf2` |
| [Messages.getUnreadReactions](/tl/method/messages-getunreadreactions) | `Messages.messages` | `0xbd7f90ac` |
| [Messages.getWebPage](/tl/method/messages-getwebpage) | `Messages.webPage` | `0x8d9692a3` |
| [Messages.getWebPagePreview](/tl/method/messages-getwebpagepreview) | `Messages.webPagePreview` | `0x570d6f6f` |
| [Messages.hideAllChatJoinRequests](/tl/method/messages-hideallchatjoinrequests) | `Updates` | `0xe085f4ea` |
| [Messages.hideChatJoinRequest](/tl/method/messages-hidechatjoinrequest) | `Updates` | `0x7fe7e815` |
| [Messages.hidePeerSettingsBar](/tl/method/messages-hidepeersettingsbar) | `Bool` | `0x4facb138` |
| [Messages.importChatInvite](/tl/method/messages-importchatinvite) | `Updates` | `0x6c50051c` |
| [Messages.initHistoryImport](/tl/method/messages-inithistoryimport) | `Messages.historyImport` | `0x34090c3b` |
| [Messages.installStickerSet](/tl/method/messages-installstickerset) | `Messages.stickerSetInstallResult` | `0xc78fe460` |
| [Messages.markDialogUnread](/tl/method/messages-markdialogunread) | `Bool` | `0x8c5006f8` |
| [Messages.migrateChat](/tl/method/messages-migratechat) | `Updates` | `0xa2875319` |
| [Messages.prolongWebView](/tl/method/messages-prolongwebview) | `Bool` | `0xb0d81a83` |
| [Messages.rateTranscribedAudio](/tl/method/messages-ratetranscribedaudio) | `Bool` | `0x7f1d072f` |
| [Messages.readDiscussion](/tl/method/messages-readdiscussion) | `Bool` | `0xf731a9f4` |
| [Messages.readEncryptedHistory](/tl/method/messages-readencryptedhistory) | `Bool` | `0x7f4b690a` |
| [Messages.readFeaturedStickers](/tl/method/messages-readfeaturedstickers) | `Bool` | `0x5b118126` |
| [Messages.readHistory](/tl/method/messages-readhistory) | `Messages.affectedMessages` | `0x0e306d3a` |
| [Messages.readMentions](/tl/method/messages-readmentions) | `Messages.affectedHistory` | `0x36e5bf4d` |
| [Messages.readMessageContents](/tl/method/messages-readmessagecontents) | `Messages.affectedMessages` | `0x36a73f77` |
| [Messages.readPollVotes](/tl/method/messages-readpollvotes) | `Messages.affectedHistory` | `0x1720b4d8` |
| [Messages.readReactions](/tl/method/messages-readreactions) | `Messages.affectedHistory` | `0x9ec44f93` |
| [Messages.readSavedHistory](/tl/method/messages-readsavedhistory) | `Bool` | `0xba4a3b5b` |
| [Messages.receivedMessages](/tl/method/messages-receivedmessages) | `ReceivedNotifyMessage` | `0x05a954c0` |
| [Messages.receivedQueue](/tl/method/messages-receivedqueue) | `Long` | `0x55a5bb66` |
| [Messages.reorderPinnedDialogs](/tl/method/messages-reorderpinneddialogs) | `Bool` | `0x3b1adf37` |
| [Messages.reorderPinnedForumTopics](/tl/method/messages-reorderpinnedforumtopics) | `Updates` | `0x0e7841f0` |
| [Messages.reorderPinnedSavedDialogs](/tl/method/messages-reorderpinnedsaveddialogs) | `Bool` | `0x8b716587` |
| [Messages.reorderQuickReplies](/tl/method/messages-reorderquickreplies) | `Bool` | `0x60331907` |
| [Messages.reorderStickerSets](/tl/method/messages-reorderstickersets) | `Bool` | `0x78337739` |
| [Messages.report](/tl/method/messages-report) | `ReportResult` | `0xfc78af9b` |
| [Messages.reportEncryptedSpam](/tl/method/messages-reportencryptedspam) | `Bool` | `0x4b0c8c0f` |
| [Messages.reportMessagesDelivery](/tl/method/messages-reportmessagesdelivery) | `Bool` | `0x5a6d7395` |
| [Messages.reportMusicListen](/tl/method/messages-reportmusiclisten) | `Bool` | `0xddbcd819` |
| [Messages.reportReaction](/tl/method/messages-reportreaction) | `Bool` | `0x3f64c076` |
| [Messages.reportReadMetrics](/tl/method/messages-reportreadmetrics) | `Bool` | `0x4067c5e6` |
| [Messages.reportSpam](/tl/method/messages-reportspam) | `Bool` | `0xcf1592db` |
| [Messages.reportSponsoredMessage](/tl/method/messages-reportsponsoredmessage) | `Channels.sponsoredMessageReportResult` | `0x12cbf0c4` |
| [Messages.requestAppWebView](/tl/method/messages-requestappwebview) | `WebViewResult` | `0x53618bce` |
| [Messages.requestEncryption](/tl/method/messages-requestencryption) | `EncryptedChat` | `0xf64daf43` |
| [Messages.requestMainWebView](/tl/method/messages-requestmainwebview) | `WebViewResult` | `0xc9e01e7b` |
| [Messages.requestSimpleWebView](/tl/method/messages-requestsimplewebview) | `WebViewResult` | `0x413a3e73` |
| [Messages.requestURLAuth](/tl/method/messages-requesturlauth) | `URLAuthResult` | `0x894cc99c` |
| [Messages.requestWebView](/tl/method/messages-requestwebview) | `WebViewResult` | `0x269dc2c1` |
| [Messages.saveDefaultSendAs](/tl/method/messages-savedefaultsendas) | `Bool` | `0xccfddf96` |
| [Messages.saveDraft](/tl/method/messages-savedraft) | `Bool` | `0x54ae308e` |
| [Messages.saveGIF](/tl/method/messages-savegif) | `Bool` | `0x327a30cb` |
| [Messages.savePreparedInlineMessage](/tl/method/messages-savepreparedinlinemessage) | `Messages.botPreparedInlineMessage` | `0xf21f7f2f` |
| [Messages.saveRecentSticker](/tl/method/messages-saverecentsticker) | `Bool` | `0x392718f8` |
| [Messages.search](/tl/method/messages-search) | `Messages.messages` | `0x29ee847a` |
| [Messages.searchCustomEmoji](/tl/method/messages-searchcustomemoji) | `EmojiList` | `0x2c11c0d7` |
| [Messages.searchEmojiStickerSets](/tl/method/messages-searchemojistickersets) | `Messages.foundStickerSets` | `0x92b4494c` |
| [Messages.searchGlobal](/tl/method/messages-searchglobal) | `Messages.messages` | `0x4bc6589a` |
| [Messages.searchSentMedia](/tl/method/messages-searchsentmedia) | `Messages.messages` | `0x107e31a0` |
| [Messages.searchStickerSets](/tl/method/messages-searchstickersets) | `Messages.foundStickerSets` | `0x35705b8a` |
| [Messages.searchStickers](/tl/method/messages-searchstickers) | `Messages.foundStickers` | `0x29b1c66a` |
| [Messages.sendBotRequestedPeer](/tl/method/messages-sendbotrequestedpeer) | `Updates` | `0x6c5cf2a7` |
| [Messages.sendEncrypted](/tl/method/messages-sendencrypted) | `Messages.sentEncryptedMessage` | `0x44fa7a15` |
| [Messages.sendEncryptedFile](/tl/method/messages-sendencryptedfile) | `Messages.sentEncryptedMessage` | `0x5559481d` |
| [Messages.sendEncryptedService](/tl/method/messages-sendencryptedservice) | `Messages.sentEncryptedMessage` | `0x32d439a4` |
| [Messages.sendInlineBotResult](/tl/method/messages-sendinlinebotresult) | `Updates` | `0xc0cf7646` |
| [Messages.sendMedia](/tl/method/messages-sendmedia) | `Updates` | `0x0330e77f` |
| [Messages.sendMessage](/tl/method/messages-sendmessage) | `Updates` | `0x545cd15a` |
| [Messages.sendMultiMedia](/tl/method/messages-sendmultimedia) | `Updates` | `0x1bf89d74` |
| [Messages.sendPaidReaction](/tl/method/messages-sendpaidreaction) | `Updates` | `0x58bbcb50` |
| [Messages.sendQuickReplyMessages](/tl/method/messages-sendquickreplymessages) | `Updates` | `0x6c750de1` |
| [Messages.sendReaction](/tl/method/messages-sendreaction) | `Updates` | `0xd30d78d4` |
| [Messages.sendScheduledMessages](/tl/method/messages-sendscheduledmessages) | `Updates` | `0xbd38850a` |
| [Messages.sendScreenshotNotification](/tl/method/messages-sendscreenshotnotification) | `Updates` | `0xa1405817` |
| [Messages.sendVote](/tl/method/messages-sendvote) | `Updates` | `0x10ea6184` |
| [Messages.sendWebViewData](/tl/method/messages-sendwebviewdata) | `Updates` | `0xdc0242c8` |
| [Messages.sendWebViewResultMessage](/tl/method/messages-sendwebviewresultmessage) | `WebViewMessageSent` | `0x0a4314f5` |
| [Messages.setBotCallbackAnswer](/tl/method/messages-setbotcallbackanswer) | `Bool` | `0xd58f130a` |
| [Messages.setBotGuestChatResult](/tl/method/messages-setbotguestchatresult) | `Bool` | `0x052b08db` |
| [Messages.setBotPrecheckoutResults](/tl/method/messages-setbotprecheckoutresults) | `Bool` | `0x09c2dd95` |
| [Messages.setBotShippingResults](/tl/method/messages-setbotshippingresults) | `Bool` | `0xe5f672fa` |
| [Messages.setChatAvailableReactions](/tl/method/messages-setchatavailablereactions) | `Updates` | `0x864b2581` |
| [Messages.setChatTheme](/tl/method/messages-setchattheme) | `Updates` | `0x081202c9` |
| [Messages.setChatWallPaper](/tl/method/messages-setchatwallpaper) | `Updates` | `0x8ffacae1` |
| [Messages.setDefaultHistoryTTL](/tl/method/messages-setdefaulthistoryttl) | `Bool` | `0x9eb51445` |
| [Messages.setDefaultReaction](/tl/method/messages-setdefaultreaction) | `Bool` | `0x4f47a016` |
| [Messages.setEncryptedTyping](/tl/method/messages-setencryptedtyping) | `Bool` | `0x791451ed` |
| [Messages.setGameScore](/tl/method/messages-setgamescore) | `Updates` | `0x8ef8ecc0` |
| [Messages.setHistoryTTL](/tl/method/messages-sethistoryttl) | `Updates` | `0xb80e5fe4` |
| [Messages.setInlineBotResults](/tl/method/messages-setinlinebotresults) | `Bool` | `0xbb12a419` |
| [Messages.setInlineGameScore](/tl/method/messages-setinlinegamescore) | `Bool` | `0x15ad9f64` |
| [Messages.setTyping](/tl/method/messages-settyping) | `Bool` | `0x58943ee2` |
| [Messages.startBot](/tl/method/messages-startbot) | `Updates` | `0xe6df7378` |
| [Messages.startHistoryImport](/tl/method/messages-starthistoryimport) | `Bool` | `0xb43df344` |
| [Messages.summarizeText](/tl/method/messages-summarizetext) | `TextWithEntities` | `0xabbbd346` |
| [Messages.toggleBotInAttachMenu](/tl/method/messages-togglebotinattachmenu) | `Bool` | `0x69f59d69` |
| [Messages.toggleDialogFilterTags](/tl/method/messages-toggledialogfiltertags) | `Bool` | `0xfd2dda49` |
| [Messages.toggleDialogPin](/tl/method/messages-toggledialogpin) | `Bool` | `0xa731e257` |
| [Messages.toggleNoForwards](/tl/method/messages-togglenoforwards) | `Updates` | `0xb2081a35` |
| [Messages.togglePaidReactionPrivacy](/tl/method/messages-togglepaidreactionprivacy) | `Bool` | `0x435885b5` |
| [Messages.togglePeerTranslations](/tl/method/messages-togglepeertranslations) | `Bool` | `0xe47cb579` |
| [Messages.toggleSavedDialogPin](/tl/method/messages-togglesaveddialogpin) | `Bool` | `0xac81bbde` |
| [Messages.toggleStickerSets](/tl/method/messages-togglestickersets) | `Bool` | `0xb5052fea` |
| [Messages.toggleSuggestedPostApproval](/tl/method/messages-togglesuggestedpostapproval) | `Updates` | `0x8107455c` |
| [Messages.toggleTodoCompleted](/tl/method/messages-toggletodocompleted) | `Updates` | `0xd3e03124` |
| [Messages.transcribeAudio](/tl/method/messages-transcribeaudio) | `Messages.transcribedAudio` | `0x269e9a49` |
| [Messages.translateText](/tl/method/messages-translatetext) | `Messages.translatedText` | `0xa5eec345` |
| [Messages.uninstallStickerSet](/tl/method/messages-uninstallstickerset) | `Bool` | `0xf96e55de` |
| [Messages.unpinAllMessages](/tl/method/messages-unpinallmessages) | `Messages.affectedHistory` | `0x062dd747` |
| [Messages.updateDialogFilter](/tl/method/messages-updatedialogfilter) | `Bool` | `0x1ad4a04a` |
| [Messages.updateDialogFiltersOrder](/tl/method/messages-updatedialogfiltersorder) | `Bool` | `0xc563c1e4` |
| [Messages.updatePinnedForumTopic](/tl/method/messages-updatepinnedforumtopic) | `Updates` | `0x175df251` |
| [Messages.updatePinnedMessage](/tl/method/messages-updatepinnedmessage) | `Updates` | `0xd2aaf7ec` |
| [Messages.updateSavedReactionTag](/tl/method/messages-updatesavedreactiontag) | `Bool` | `0x60297dec` |
| [Messages.uploadEncryptedFile](/tl/method/messages-uploadencryptedfile) | `EncryptedFile` | `0x5057c497` |
| [Messages.uploadImportedMedia](/tl/method/messages-uploadimportedmedia) | `MessageMedia` | `0x2a862092` |
| [Messages.uploadMedia](/tl/method/messages-uploadmedia) | `MessageMedia` | `0x14967978` |
| [Messages.viewSponsoredMessage](/tl/method/messages-viewsponsoredmessage) | `Bool` | `0x269e3643` |

</div>

## misc

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [InitConnection](/tl/method/initconnection) | `X` | `0xc1cd5ea9` |
| [InvokeAfterMsg](/tl/method/invokeaftermsg) | `X` | `0xcb9f372d` |
| [InvokeAfterMsgs](/tl/method/invokeaftermsgs) | `X` | `0x3dc4b4f0` |
| [InvokeWithApnsSecret](/tl/method/invokewithapnssecret) | `X` | `0x0dae54f8` |
| [InvokeWithBusinessConnection](/tl/method/invokewithbusinessconnection) | `X` | `0xdd289f8e` |
| [InvokeWithGooglePlayIntegrity](/tl/method/invokewithgoogleplayintegrity) | `X` | `0x1df92984` |
| [InvokeWithLayer](/tl/method/invokewithlayer) | `X` | `0xda9b0d0d` |
| [InvokeWithMessagesRange](/tl/method/invokewithmessagesrange) | `X` | `0x365275f2` |
| [InvokeWithReCaptcha](/tl/method/invokewithrecaptcha) | `X` | `0xadbb0f94` |
| [InvokeWithTakeout](/tl/method/invokewithtakeout) | `X` | `0xaca9fd2e` |
| [InvokeWithoutUpdates](/tl/method/invokewithoutupdates) | `X` | `0xbf9459b7` |

</div>

## payments

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Payments.applyGiftCode](/tl/method/payments-applygiftcode) | `Updates` | `0xf6e26854` |
| [Payments.assignAppStoreTransaction](/tl/method/payments-assignappstoretransaction) | `Updates` | `0x80ed747d` |
| [Payments.assignPlayMarketTransaction](/tl/method/payments-assignplaymarkettransaction) | `Updates` | `0xdffd50d3` |
| [Payments.botCancelStarsSubscription](/tl/method/payments-botcancelstarssubscription) | `Bool` | `0x6dfa0622` |
| [Payments.canPurchaseStore](/tl/method/payments-canpurchasestore) | `Bool` | `0x4fdc5ea7` |
| [Payments.changeStarsSubscription](/tl/method/payments-changestarssubscription) | `Bool` | `0xc7770878` |
| [Payments.checkCanSendGift](/tl/method/payments-checkcansendgift) | `Payments.checkCanSendGiftResult` | `0xc0c4edc9` |
| [Payments.checkGiftCode](/tl/method/payments-checkgiftcode) | `Payments.checkedGiftCode` | `0x8e51b4c1` |
| [Payments.clearSavedInfo](/tl/method/payments-clearsavedinfo) | `Bool` | `0xd83d70c1` |
| [Payments.connectStarRefBot](/tl/method/payments-connectstarrefbot) | `Payments.connectedStarRefBots` | `0x7ed5348a` |
| [Payments.convertStarGift](/tl/method/payments-convertstargift) | `Bool` | `0x74bf076b` |
| [Payments.craftStarGift](/tl/method/payments-craftstargift) | `Updates` | `0xb0f9684f` |
| [Payments.createStarGiftCollection](/tl/method/payments-createstargiftcollection) | `StarGiftCollection` | `0x1f4a0e87` |
| [Payments.deleteStarGiftCollection](/tl/method/payments-deletestargiftcollection) | `Bool` | `0xad5648e8` |
| [Payments.editConnectedStarRefBot](/tl/method/payments-editconnectedstarrefbot) | `Payments.connectedStarRefBots` | `0xe4fca4a3` |
| [Payments.exportInvoice](/tl/method/payments-exportinvoice) | `Payments.exportedInvoice` | `0x0f91b065` |
| [Payments.fulfillStarsSubscription](/tl/method/payments-fulfillstarssubscription) | `Bool` | `0xcc5bebb3` |
| [Payments.getBankCardData](/tl/method/payments-getbankcarddata) | `Payments.bankCardData` | `0x2e79d779` |
| [Payments.getConnectedStarRefBot](/tl/method/payments-getconnectedstarrefbot) | `Payments.connectedStarRefBots` | `0xb7d998f0` |
| [Payments.getConnectedStarRefBots](/tl/method/payments-getconnectedstarrefbots) | `Payments.connectedStarRefBots` | `0x5869a553` |
| [Payments.getCraftStarGifts](/tl/method/payments-getcraftstargifts) | `Payments.savedStarGifts` | `0xfd05dd00` |
| [Payments.getGiveawayInfo](/tl/method/payments-getgiveawayinfo) | `Payments.giveawayInfo` | `0xf4239425` |
| [Payments.getPaymentForm](/tl/method/payments-getpaymentform) | `Payments.paymentForm` | `0x37148dbb` |
| [Payments.getPaymentReceipt](/tl/method/payments-getpaymentreceipt) | `Payments.paymentReceipt` | `0x2478d1cc` |
| [Payments.getPremiumGiftCodeOptions](/tl/method/payments-getpremiumgiftcodeoptions) | `PremiumGiftCodeOption` | `0x2757ba54` |
| [Payments.getResaleStarGifts](/tl/method/payments-getresalestargifts) | `Payments.resaleStarGifts` | `0x7a5fa236` |
| [Payments.getSavedInfo](/tl/method/payments-getsavedinfo) | `Payments.savedInfo` | `0x227d824b` |
| [Payments.getSavedStarGift](/tl/method/payments-getsavedstargift) | `Payments.savedStarGifts` | `0xb455a106` |
| [Payments.getSavedStarGifts](/tl/method/payments-getsavedstargifts) | `Payments.savedStarGifts` | `0xa319e569` |
| [Payments.getStarGiftActiveAuctions](/tl/method/payments-getstargiftactiveauctions) | `Payments.starGiftActiveAuctions` | `0xa5d0514d` |
| [Payments.getStarGiftAuctionAcquiredGifts](/tl/method/payments-getstargiftauctionacquiredgifts) | `Payments.starGiftAuctionAcquiredGifts` | `0x6ba2cbec` |
| [Payments.getStarGiftAuctionState](/tl/method/payments-getstargiftauctionstate) | `Payments.starGiftAuctionState` | `0x5c9ff4d6` |
| [Payments.getStarGiftCollections](/tl/method/payments-getstargiftcollections) | `Payments.starGiftCollections` | `0x981b91dd` |
| [Payments.getStarGiftUpgradeAttributes](/tl/method/payments-getstargiftupgradeattributes) | `Payments.starGiftUpgradeAttributes` | `0x6d038b58` |
| [Payments.getStarGiftUpgradePreview](/tl/method/payments-getstargiftupgradepreview) | `Payments.starGiftUpgradePreview` | `0x9c9abcb1` |
| [Payments.getStarGiftWithdrawalURL](/tl/method/payments-getstargiftwithdrawalurl) | `Payments.starGiftWithdrawalURL` | `0xd06e93a8` |
| [Payments.getStarGifts](/tl/method/payments-getstargifts) | `Payments.starGifts` | `0xc4563590` |
| [Payments.getStarsGiftOptions](/tl/method/payments-getstarsgiftoptions) | `StarsGiftOption` | `0xd3c96bc8` |
| [Payments.getStarsGiveawayOptions](/tl/method/payments-getstarsgiveawayoptions) | `StarsGiveawayOption` | `0xbd1efd3e` |
| [Payments.getStarsRevenueAdsAccountURL](/tl/method/payments-getstarsrevenueadsaccounturl) | `Payments.starsRevenueAdsAccountURL` | `0xd1d7efc5` |
| [Payments.getStarsRevenueStats](/tl/method/payments-getstarsrevenuestats) | `Payments.starsRevenueStats` | `0xd91ffad6` |
| [Payments.getStarsRevenueWithdrawalURL](/tl/method/payments-getstarsrevenuewithdrawalurl) | `Payments.starsRevenueWithdrawalURL` | `0x2433dc92` |
| [Payments.getStarsStatus](/tl/method/payments-getstarsstatus) | `Payments.starsStatus` | `0x4ea9b3bf` |
| [Payments.getStarsSubscriptions](/tl/method/payments-getstarssubscriptions) | `Payments.starsStatus` | `0x032512c5` |
| [Payments.getStarsTopupOptions](/tl/method/payments-getstarstopupoptions) | `StarsTopupOption` | `0xc00ec7d3` |
| [Payments.getStarsTransactions](/tl/method/payments-getstarstransactions) | `Payments.starsStatus` | `0x69da4557` |
| [Payments.getStarsTransactionsByID](/tl/method/payments-getstarstransactionsbyid) | `Payments.starsStatus` | `0x2dca16b8` |
| [Payments.getSuggestedStarRefBots](/tl/method/payments-getsuggestedstarrefbots) | `Payments.suggestedStarRefBots` | `0x0d6b48f7` |
| [Payments.getUniqueStarGift](/tl/method/payments-getuniquestargift) | `Payments.uniqueStarGift` | `0xa1974d72` |
| [Payments.getUniqueStarGiftValueInfo](/tl/method/payments-getuniquestargiftvalueinfo) | `Payments.uniqueStarGiftValueInfo` | `0x4365af6b` |
| [Payments.launchPrepaidGiveaway](/tl/method/payments-launchprepaidgiveaway) | `Updates` | `0x5ff58f20` |
| [Payments.refundStarsCharge](/tl/method/payments-refundstarscharge) | `Updates` | `0x25ae8f4a` |
| [Payments.reorderStarGiftCollections](/tl/method/payments-reorderstargiftcollections) | `Bool` | `0xc32af4cc` |
| [Payments.resolveStarGiftOffer](/tl/method/payments-resolvestargiftoffer) | `Updates` | `0xe9ce781c` |
| [Payments.saveStarGift](/tl/method/payments-savestargift) | `Bool` | `0x2a2a697c` |
| [Payments.sendPaymentForm](/tl/method/payments-sendpaymentform) | `Payments.paymentResult` | `0x2d03522f` |
| [Payments.sendStarGiftOffer](/tl/method/payments-sendstargiftoffer) | `Updates` | `0x8fb86b41` |
| [Payments.sendStarsForm](/tl/method/payments-sendstarsform) | `Payments.paymentResult` | `0x7998c914` |
| [Payments.toggleChatStarGiftNotifications](/tl/method/payments-togglechatstargiftnotifications) | `Bool` | `0x60eaefa1` |
| [Payments.toggleStarGiftsPinnedToTop](/tl/method/payments-togglestargiftspinnedtotop) | `Bool` | `0x1513e7b0` |
| [Payments.transferStarGift](/tl/method/payments-transferstargift) | `Updates` | `0x7f18176a` |
| [Payments.updateStarGiftCollection](/tl/method/payments-updatestargiftcollection) | `StarGiftCollection` | `0x4fddbee7` |
| [Payments.updateStarGiftPrice](/tl/method/payments-updatestargiftprice) | `Updates` | `0xedbe6ccb` |
| [Payments.upgradeStarGift](/tl/method/payments-upgradestargift) | `Updates` | `0xaed6e4f5` |
| [Payments.validateRequestedInfo](/tl/method/payments-validaterequestedinfo) | `Payments.validatedRequestedInfo` | `0xb6c8f12b` |

</div>

## phone

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Phone.acceptCall](/tl/method/phone-acceptcall) | `Phone.phoneCall` | `0x3bd2b4a0` |
| [Phone.checkGroupCall](/tl/method/phone-checkgroupcall) | `Int` | `0xb59cf977` |
| [Phone.confirmCall](/tl/method/phone-confirmcall) | `Phone.phoneCall` | `0x2efe1722` |
| [Phone.createConferenceCall](/tl/method/phone-createconferencecall) | `Updates` | `0x7d0444bb` |
| [Phone.createGroupCall](/tl/method/phone-creategroupcall) | `Updates` | `0x48cdc6d8` |
| [Phone.declineConferenceCallInvite](/tl/method/phone-declineconferencecallinvite) | `Updates` | `0x3c479971` |
| [Phone.deleteConferenceCallParticipants](/tl/method/phone-deleteconferencecallparticipants) | `Updates` | `0x8ca60525` |
| [Phone.deleteGroupCallMessages](/tl/method/phone-deletegroupcallmessages) | `Updates` | `0xf64f54f7` |
| [Phone.deleteGroupCallParticipantMessages](/tl/method/phone-deletegroupcallparticipantmessages) | `Updates` | `0x1dbfeca0` |
| [Phone.discardCall](/tl/method/phone-discardcall) | `Updates` | `0xb2cbc1c0` |
| [Phone.discardGroupCall](/tl/method/phone-discardgroupcall) | `Updates` | `0x7a777135` |
| [Phone.editGroupCallParticipant](/tl/method/phone-editgroupcallparticipant) | `Updates` | `0xa5273abf` |
| [Phone.editGroupCallTitle](/tl/method/phone-editgroupcalltitle) | `Updates` | `0x1ca6ac0a` |
| [Phone.exportGroupCallInvite](/tl/method/phone-exportgroupcallinvite) | `Phone.exportedGroupCallInvite` | `0xe6aa647f` |
| [Phone.getCallConfig](/tl/method/phone-getcallconfig) | `DataJSON` | `0x55451fa9` |
| [Phone.getGroupCall](/tl/method/phone-getgroupcall) | `Phone.groupCall` | `0x041845db` |
| [Phone.getGroupCallChainBlocks](/tl/method/phone-getgroupcallchainblocks) | `Updates` | `0xee9f88a6` |
| [Phone.getGroupCallJoinAs](/tl/method/phone-getgroupcalljoinas) | `Phone.joinAsPeers` | `0xef7c213a` |
| [Phone.getGroupCallStars](/tl/method/phone-getgroupcallstars) | `Phone.groupCallStars` | `0x6f636302` |
| [Phone.getGroupCallStreamChannels](/tl/method/phone-getgroupcallstreamchannels) | `Phone.groupCallStreamChannels` | `0x1ab21940` |
| [Phone.getGroupCallStreamRtmpURL](/tl/method/phone-getgroupcallstreamrtmpurl) | `Phone.groupCallStreamRtmpURL` | `0x5af4c73a` |
| [Phone.getGroupParticipants](/tl/method/phone-getgroupparticipants) | `Phone.groupParticipants` | `0xc558d8ab` |
| [Phone.inviteConferenceCallParticipant](/tl/method/phone-inviteconferencecallparticipant) | `Updates` | `0xbcf22685` |
| [Phone.inviteToGroupCall](/tl/method/phone-invitetogroupcall) | `Updates` | `0x7b393160` |
| [Phone.joinGroupCall](/tl/method/phone-joingroupcall) | `Updates` | `0x8fb53057` |
| [Phone.joinGroupCallPresentation](/tl/method/phone-joingroupcallpresentation) | `Updates` | `0xcbea6bc4` |
| [Phone.leaveGroupCall](/tl/method/phone-leavegroupcall) | `Updates` | `0x500377f9` |
| [Phone.leaveGroupCallPresentation](/tl/method/phone-leavegroupcallpresentation) | `Updates` | `0x1c50d144` |
| [Phone.receivedCall](/tl/method/phone-receivedcall) | `Bool` | `0x17d54f61` |
| [Phone.requestCall](/tl/method/phone-requestcall) | `Phone.phoneCall` | `0x42ff96ed` |
| [Phone.saveCallDebug](/tl/method/phone-savecalldebug) | `Bool` | `0x277add7e` |
| [Phone.saveCallLog](/tl/method/phone-savecalllog) | `Bool` | `0x41248786` |
| [Phone.saveDefaultGroupCallJoinAs](/tl/method/phone-savedefaultgroupcalljoinas) | `Bool` | `0x575e1f8c` |
| [Phone.saveDefaultSendAs](/tl/method/phone-savedefaultsendas) | `Bool` | `0x4167add1` |
| [Phone.sendConferenceCallBroadcast](/tl/method/phone-sendconferencecallbroadcast) | `Updates` | `0xc6701900` |
| [Phone.sendGroupCallEncryptedMessage](/tl/method/phone-sendgroupcallencryptedmessage) | `Bool` | `0xe5afa56d` |
| [Phone.sendGroupCallMessage](/tl/method/phone-sendgroupcallmessage) | `Updates` | `0xb1d11410` |
| [Phone.sendSignalingData](/tl/method/phone-sendsignalingdata) | `Bool` | `0xff7a9383` |
| [Phone.setCallRating](/tl/method/phone-setcallrating) | `Updates` | `0x59ead627` |
| [Phone.startScheduledGroupCall](/tl/method/phone-startscheduledgroupcall) | `Updates` | `0x5680e342` |
| [Phone.toggleGroupCallRecord](/tl/method/phone-togglegroupcallrecord) | `Updates` | `0xf128c708` |
| [Phone.toggleGroupCallSettings](/tl/method/phone-togglegroupcallsettings) | `Updates` | `0x974392f2` |
| [Phone.toggleGroupCallStartSubscription](/tl/method/phone-togglegroupcallstartsubscription) | `Updates` | `0x219c34e6` |

</div>

## photos

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Photos.deletePhotos](/tl/method/photos-deletephotos) | `Long` | `0x87cf7f2f` |
| [Photos.getUserPhotos](/tl/method/photos-getuserphotos) | `Photos.photos` | `0x91cd32a8` |
| [Photos.updateProfilePhoto](/tl/method/photos-updateprofilephoto) | `Photos.photo` | `0x09e82039` |
| [Photos.uploadContactProfilePhoto](/tl/method/photos-uploadcontactprofilephoto) | `Photos.photo` | `0xe14c4a71` |
| [Photos.uploadProfilePhoto](/tl/method/photos-uploadprofilephoto) | `Photos.photo` | `0x0388a3b5` |

</div>

## premium

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Premium.applyBoost](/tl/method/premium-applyboost) | `Premium.myBoosts` | `0x6b7da746` |
| [Premium.getBoostsList](/tl/method/premium-getboostslist) | `Premium.boostsList` | `0x60f67660` |
| [Premium.getBoostsStatus](/tl/method/premium-getboostsstatus) | `Premium.boostsStatus` | `0x042f1f61` |
| [Premium.getMyBoosts](/tl/method/premium-getmyboosts) | `Premium.myBoosts` | `0x0be77b4a` |
| [Premium.getUserBoosts](/tl/method/premium-getuserboosts) | `Premium.boostsList` | `0x39854d1f` |

</div>

## smsjobs

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Smsjobs.finishJob](/tl/method/smsjobs-finishjob) | `Bool` | `0x4f1ebf24` |
| [Smsjobs.getSmsJob](/tl/method/smsjobs-getsmsjob) | `SmsJob` | `0x778d902f` |
| [Smsjobs.getStatus](/tl/method/smsjobs-getstatus) | `Smsjobs.status` | `0x10a698e8` |
| [Smsjobs.isEligibleToJoin](/tl/method/smsjobs-iseligibletojoin) | `Smsjobs.eligibilityToJoin` | `0x0edc39d0` |
| [Smsjobs.join](/tl/method/smsjobs-join) | `Bool` | `0xa74ece2d` |
| [Smsjobs.leave](/tl/method/smsjobs-leave) | `Bool` | `0x9898ad73` |
| [Smsjobs.updateSettings](/tl/method/smsjobs-updatesettings) | `Bool` | `0x093fa0bf` |

</div>

## stats

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Stats.getBroadcastStats](/tl/method/stats-getbroadcaststats) | `Stats.broadcastStats` | `0xab42441a` |
| [Stats.getMegagroupStats](/tl/method/stats-getmegagroupstats) | `Stats.megagroupStats` | `0xdcdf8607` |
| [Stats.getMessagePublicForwards](/tl/method/stats-getmessagepublicforwards) | `Stats.publicForwards` | `0x5f150144` |
| [Stats.getMessageStats](/tl/method/stats-getmessagestats) | `Stats.messageStats` | `0xb6e0a3f5` |
| [Stats.getPollStats](/tl/method/stats-getpollstats) | `Stats.pollStats` | `0xc27dfa68` |
| [Stats.getStoryPublicForwards](/tl/method/stats-getstorypublicforwards) | `Stats.publicForwards` | `0xa6437ef6` |
| [Stats.getStoryStats](/tl/method/stats-getstorystats) | `Stats.storyStats` | `0x374fef40` |
| [Stats.loadAsyncGraph](/tl/method/stats-loadasyncgraph) | `StatsGraph` | `0x621d5fa0` |

</div>

## stickers

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Stickers.addStickerToSet](/tl/method/stickers-addstickertoset) | `Messages.stickerSet` | `0x8653febe` |
| [Stickers.changeSticker](/tl/method/stickers-changesticker) | `Messages.stickerSet` | `0xf5537ebc` |
| [Stickers.changeStickerPosition](/tl/method/stickers-changestickerposition) | `Messages.stickerSet` | `0xffb6d4ca` |
| [Stickers.checkShortName](/tl/method/stickers-checkshortname) | `Bool` | `0x284b3639` |
| [Stickers.createStickerSet](/tl/method/stickers-createstickerset) | `Messages.stickerSet` | `0x9021ab67` |
| [Stickers.deleteStickerSet](/tl/method/stickers-deletestickerset) | `Bool` | `0x87704394` |
| [Stickers.removeStickerFromSet](/tl/method/stickers-removestickerfromset) | `Messages.stickerSet` | `0xf7760f51` |
| [Stickers.renameStickerSet](/tl/method/stickers-renamestickerset) | `Messages.stickerSet` | `0x124b1c00` |
| [Stickers.replaceSticker](/tl/method/stickers-replacesticker) | `Messages.stickerSet` | `0x4696459a` |
| [Stickers.setStickerSetThumb](/tl/method/stickers-setstickersetthumb) | `Messages.stickerSet` | `0xa76a5392` |
| [Stickers.suggestShortName](/tl/method/stickers-suggestshortname) | `Stickers.suggestedShortName` | `0x4dafc503` |

</div>

## stories

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Stories.activateStealthMode](/tl/method/stories-activatestealthmode) | `Updates` | `0x57bbd166` |
| [Stories.canSendStory](/tl/method/stories-cansendstory) | `Stories.canSendStoryCount` | `0x30eb63f0` |
| [Stories.createAlbum](/tl/method/stories-createalbum) | `StoryAlbum` | `0xa36396e5` |
| [Stories.deleteAlbum](/tl/method/stories-deletealbum) | `Bool` | `0x8d3456d0` |
| [Stories.deleteStories](/tl/method/stories-deletestories) | `Int` | `0xae59db5f` |
| [Stories.editStory](/tl/method/stories-editstory) | `Updates` | `0x2c63a72b` |
| [Stories.exportStoryLink](/tl/method/stories-exportstorylink) | `ExportedStoryLink` | `0x7b8def20` |
| [Stories.getAlbumStories](/tl/method/stories-getalbumstories) | `Stories.stories` | `0xac806d61` |
| [Stories.getAlbums](/tl/method/stories-getalbums) | `Stories.albums` | `0x25b3eac7` |
| [Stories.getAllReadPeerStories](/tl/method/stories-getallreadpeerstories) | `Updates` | `0x9b5ae7f9` |
| [Stories.getAllStories](/tl/method/stories-getallstories) | `Stories.allStories` | `0xeeb0d625` |
| [Stories.getChatsToSend](/tl/method/stories-getchatstosend) | `Messages.chats` | `0xa56a8b60` |
| [Stories.getPeerMaxIDs](/tl/method/stories-getpeermaxids) | `RecentStory` | `0x78499170` |
| [Stories.getPeerStories](/tl/method/stories-getpeerstories) | `Stories.peerStories` | `0x2c4ada50` |
| [Stories.getPinnedStories](/tl/method/stories-getpinnedstories) | `Stories.stories` | `0x5821a5dc` |
| [Stories.getStoriesArchive](/tl/method/stories-getstoriesarchive) | `Stories.stories` | `0xb4352016` |
| [Stories.getStoriesByID](/tl/method/stories-getstoriesbyid) | `Stories.stories` | `0x5774ca74` |
| [Stories.getStoriesViews](/tl/method/stories-getstoriesviews) | `Stories.storyViews` | `0x28e16cc8` |
| [Stories.getStoryReactionsList](/tl/method/stories-getstoryreactionslist) | `Stories.storyReactionsList` | `0xb9b2881f` |
| [Stories.getStoryViewsList](/tl/method/stories-getstoryviewslist) | `Stories.storyViewsList` | `0x7ed23c57` |
| [Stories.incrementStoryViews](/tl/method/stories-incrementstoryviews) | `Bool` | `0xb2028afb` |
| [Stories.readStories](/tl/method/stories-readstories) | `Int` | `0xa556dac8` |
| [Stories.reorderAlbums](/tl/method/stories-reorderalbums) | `Bool` | `0x8535fbd9` |
| [Stories.report](/tl/method/stories-report) | `ReportResult` | `0x19d8eb45` |
| [Stories.searchPosts](/tl/method/stories-searchposts) | `Stories.foundStories` | `0xd1810907` |
| [Stories.sendReaction](/tl/method/stories-sendreaction) | `Updates` | `0x7fd736b2` |
| [Stories.sendStory](/tl/method/stories-sendstory) | `Updates` | `0x8f9e6898` |
| [Stories.startLive](/tl/method/stories-startlive) | `Updates` | `0xd069ccde` |
| [Stories.toggleAllStoriesHidden](/tl/method/stories-toggleallstorieshidden) | `Bool` | `0x7c2557c4` |
| [Stories.togglePeerStoriesHidden](/tl/method/stories-togglepeerstorieshidden) | `Bool` | `0xbd0415c4` |
| [Stories.togglePinned](/tl/method/stories-togglepinned) | `Int` | `0x9a75a1ef` |
| [Stories.togglePinnedToTop](/tl/method/stories-togglepinnedtotop) | `Bool` | `0x0b297e9b` |
| [Stories.updateAlbum](/tl/method/stories-updatealbum) | `StoryAlbum` | `0x5e5259b6` |

</div>

## updates

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Updates.getChannelDifference](/tl/method/updates-getchanneldifference) | `Updates.channelDifference` | `0x03173d78` |
| [Updates.getDifference](/tl/method/updates-getdifference) | `Updates.difference` | `0x19c2f763` |
| [Updates.getState](/tl/method/updates-getstate) | `Updates.state` | `0xedd4882a` |

</div>

## upload

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Upload.getCDNFile](/tl/method/upload-getcdnfile) | `Upload.cdnFile` | `0x395f69da` |
| [Upload.getCDNFileHashes](/tl/method/upload-getcdnfilehashes) | `FileHash` | `0x91dc3f31` |
| [Upload.getFile](/tl/method/upload-getfile) | `Upload.file` | `0xbe5335be` |
| [Upload.getFileHashes](/tl/method/upload-getfilehashes) | `FileHash` | `0x9156982a` |
| [Upload.getWebFile](/tl/method/upload-getwebfile) | `Upload.webFile` | `0x24e6818d` |
| [Upload.reuploadCDNFile](/tl/method/upload-reuploadcdnfile) | `FileHash` | `0x9b2754a8` |
| [Upload.saveBigFilePart](/tl/method/upload-savebigfilepart) | `Bool` | `0xde7b673d` |
| [Upload.saveFilePart](/tl/method/upload-savefilepart) | `Bool` | `0xb304a621` |

</div>

## users

<div class="wide-table">

| Method | Returns | ID |
|---|---|---|
| [Users.getFullUser](/tl/method/users-getfulluser) | `Users.userFull` | `0xb60f5918` |
| [Users.getRequirementsToContact](/tl/method/users-getrequirementstocontact) | `RequirementToContact` | `0xd89a83a3` |
| [Users.getSavedMusic](/tl/method/users-getsavedmusic) | `Users.savedMusic` | `0x788d7fe3` |
| [Users.getSavedMusicByID](/tl/method/users-getsavedmusicbyid) | `Users.savedMusic` | `0x7573a4e9` |
| [Users.getUsers](/tl/method/users-getusers) | `User` | `0x0d91a548` |
| [Users.setSecureValueErrors](/tl/method/users-setsecurevalueerrors) | `Bool` | `0x90c894b5` |
| [Users.suggestBirthday](/tl/method/users-suggestbirthday) | `Updates` | `0xfc533372` |

</div>

