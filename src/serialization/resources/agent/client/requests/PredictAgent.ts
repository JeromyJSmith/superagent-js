/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const PredictAgent: core.serialization.Schema<serializers.PredictAgent.Raw, SuperAgent.PredictAgent> =
    core.serialization.object({
        input: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        hasStreaming: core.serialization.property("has_streaming", core.serialization.boolean().optional()),
    });

export declare namespace PredictAgent {
    interface Raw {
        input: Record<string, unknown>;
        has_streaming?: boolean | null;
    }
}