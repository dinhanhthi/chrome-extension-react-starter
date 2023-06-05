// Make the same change on the backend side!
export type LinkedInCredentials = {
  access_token: string
  expires_in: number
  scope: string
}

// Make the same change on the backend side!
export type LinkedInProfile = {
  id: string
  email: string
  firstName?: string
  lastName?: string
  profilePictureUrl?: string
  createdDate?: Date
}

// Make the same change on the backend side!
export type UserInfo = {
  profile?: LinkedInProfile
  credits?: number
  settings?: UserSettings
}

// Make the same change on the backend side!
export type SuggestionResponse = {
  text: string
  credits: number
}

// Make the same change on the backend side!
export type TranslationResponse = {
  text: string
  credits: number
  sourceLanguage?: string
  targetLanguage?: string
}

export type ErrorReponse = {
  error: boolean
  message: string
}

// Used to communicate between content script and playground
export type TranslatedData = {
  text?: string
  isError?: boolean
} | null

// Used to communicate between content script and playground, the same role as TranslatedData
export type SavedMessagesData = {
  hasError: boolean
  errorMessage?: string
  replies?: string[]
  userId?: string // used to include in the request "savedMessageClicked"
}

export type CustomCofig = {
  aiButton: string
  supportedLangues: {
    code: LanguageCode
    name: string
    icon: string
  }[]
}

export type DisplayContext =
  | 'comment'
  | 'popupMessaging'
  | 'inboxMessaging'
  | 'note'
  | 'article'
  | 'sendPost'

export type LanguageCode = 'DE' | 'ES' | 'EN-US' | 'FR' | 'IT' | 'PT-PT'

export type LoginType = 'loggedOut' | 'loggingIn' | 'loggedIn'

// Make the same change on the backend side!
export type UserSettings = {
  suggest?: SuggestSettings
  translate?: TranslateSettings
  quickReplies?: QuickRepliesSettings
}

export type IsUpdatingSettingsState = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof UserSettings]: boolean
}

// Make the same change on the backend side!
export type SuggestSettings = {
  model?: 'gpt-4' | 'gpt-3.5-turbo'
  commentLanguage?: string
  commentLength?: number
  commentGender?: 'male' | 'female'
  commentTone?: 'formal' | 'informal' // kept for old versions
  commentHashtags?: boolean
  commentQuestion?: number // between 0 and 10
  job?: string
  expertises?: string
  company?: string
  companyPitch?: string
  disableTypeWriter?: boolean
  commentSentiments?: CommentSentiment[]
  goal?: string
  additionalInfo?: string
}

// Make the same change on the backend side!
export type CommentSentiment = {
  icon: string
  prompt: string
  hoverText: string
  // 👇 Ideta uses this to get the prompt on the back for the default sentiments
  // When this is used, the "prompt" property is ignored
  idetaPromptLabel?: string
  showInBar?: boolean // show in the suggestion bar?
}

// Make the same change on the backend side!
export type TranslateSettings = {
  translateTone?: 'formal' | 'informal'
}

export type QuickRepliesLocation = 'comment' | 'messaging' | 'note'

// Make the same change on the backend side!
export type QuickRepliesSettings = {
  quickReplies?: ({ text: string; usedAt?: QuickRepliesLocation[]; isNew?: boolean } | undefined)[]
}

export type Settings = SuggestSettings & TranslateSettings & QuickRepliesSettings

export type SettingsKeys = keyof Settings

export type TalkToBackgroundProps = {
  message: {
    type: string
    data?: string
    targetLanguage?: string
    sourceLanguage?: string
    userId?: string
    sentiment?: CommentSentiment
    location?: UsageLocation
    qrLocation?: QuickRepliesLocation
    urlOpts?: string // used for openOptions
  }
  portName?: string
}

// eslint-disable-next-line no-unused-vars
export type TalkToBackgroundFunc = (props: TalkToBackgroundProps) => Promise<any>

// Make the same change on the backend side!
export type UsageType = 'suggest' | 'translate' | 'savedAnswers'
export type UsageLocation = 'post' | 'reply' | 'article' | 'messaging' | 'note' | 'sendPost'
