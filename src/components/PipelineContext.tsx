import { createContext } from "react";

export interface PipelineData {
    pipelineName: string;
    sourceTable: string;
}

export interface PipelineContextType {
    data: PipelineData;
    setData: (data: PipelineData) => void;
}

export const PipelineContext =
    createContext<PipelineContextType | undefined>(undefined);