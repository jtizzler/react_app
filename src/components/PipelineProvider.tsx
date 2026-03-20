import { useState } from "react";
import type { ReactNode } from "react";
import { PipelineContext } from "./PipelineContext";
import type { PipelineData } from "./PipelineContext";

export function PipelineProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<PipelineData>({
        pipelineName: "",
        sourceTable: ""
    });

    return (
        <PipelineContext.Provider value={{ data, setData }}>
            {children}
        </PipelineContext.Provider>
    );
}