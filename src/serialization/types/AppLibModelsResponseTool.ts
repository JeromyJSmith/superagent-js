/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppLibModelsResponseTool: core.serialization.ObjectSchema<
    serializers.AppLibModelsResponseTool.Raw,
    SuperAgent.AppLibModelsResponseTool
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("..")).ToolType).optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    userId: core.serialization.string(),
    returnDirect: core.serialization.boolean(),
    createdAt: core.serialization.date().optional(),
    updatedAt: core.serialization.date().optional(),
});

export declare namespace AppLibModelsResponseTool {
    interface Raw {
        id: string;
        name: string;
        description?: string | null;
        type?: serializers.ToolType.Raw | null;
        metadata?: Record<string, unknown> | null;
        userId: string;
        returnDirect: boolean;
        createdAt?: string | null;
        updatedAt?: string | null;
    }
}
