import { composeContext, elizaLogger } from "@elizaos/core";
import { generateMessageResponse, generateTrueOrFalse } from "@elizaos/core";
import { booleanFooter, messageCompletionFooter } from "@elizaos/core";
import {
    type Action,
    type ActionExample,
    type Content,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    ModelClass,
    type State,
} from "@elizaos/core";

export const GrootAction: Action = {
    name: "GROOT",
    similes: [
        "WHO_ARE_YOU", 
        "HOW_ARE_YOU",
        "WHERE_ARE_YOU",
        "WHAT_ARE_YOU",
        "WHAT_IS_YOUR_NAME"
    ],
    description:
        "Groot's language",
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options: any,
        callback: HandlerCallback
    ) => {
        if (!state) {
            state = (await runtime.composeState(message)) as State;
        }
        state = await runtime.updateRecentMessageState(state);

        // 简化处理逻辑，直接返回固定响应
        const response = {
            text: "I am groot.",
            action: "GROOT",
            certainty: 1.0
        };
  
        await callback(response);
        return response;

    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "I am groot.",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "I am groot.",
                    action: "GROOT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "how are you?",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "I'm groot.",
                    action: "GROOT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "what is your name?",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "groot.",
                    action: "GROOT",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;
