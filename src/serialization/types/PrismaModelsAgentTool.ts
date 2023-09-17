/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsAgentTool: core.serialization.ObjectSchema<
    serializers.PrismaModelsAgentTool.Raw,
    SuperAgent.PrismaModelsAgentTool
> = core.serialization.object({
    agentId: core.serialization.string(),
    toolId: core.serialization.string(),
    agent: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgent).optional(),
    tool: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsTool).optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace PrismaModelsAgentTool {
    interface Raw {
        agentId: string;
        toolId: string;
        agent?: serializers.PrismaModelsAgent.Raw | null;
        tool?: serializers.PrismaModelsTool.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}