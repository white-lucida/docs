import React from "react"
import {
	DiscordInteraction,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordOptionsContext,
	DiscordReaction,
	DiscordReactions,
} from '@discord-message-components/react'

export  { DiscordMessages as Messages } 

export const Bot = ({ children }) => {
  return (
    <DiscordMessage>
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

