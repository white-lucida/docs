import React from "react"
import {
	DiscordInteraction,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
  DiscordButton,
  DiscordButtons,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMarkdown,
} from '@discord-message-components/react'

import '@discord-message-components/react/dist/style.css'

export { DiscordMessages as Messages } 

export const Bot = ({ children }) => {
  const avatar = "https://cdn.discordapp.com/icons/813577333516402728/a1b8a9ebbf6382f916539a10b5f79315.png"
  return (
    <DiscordMessage author="White-Lucida" avatar={avatar} bot={true}>
      { children }
    </DiscordMessage>
  )
}

export const User = ({ children }) => {
  return (
    <DiscordMessage>
      { children }
    </DiscordMessage>
  )
}


export { DiscordEmbed as Embed, DiscordEmbedFields as Fields } 



export{ DiscordButtons as Buttons, DiscordButton as Button, DiscordMention as Mention, DiscordInteraction as Interaction, DiscordMarkdown as Markdown }





// export const Fields = ({ children }) => <DiscordEmbedFields slot="fields">{ children }</DiscordEmbedFields>;




