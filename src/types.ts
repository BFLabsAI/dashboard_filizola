export interface Lead {
    id: string;
    lead_name: string | null;
    telefone: string | null;
    status_lead: string | null;
    etapa_follow: string | null;
    produtos_interesse: string | null;
    setor_principal: string | null;
    faixa_etaria: string | null;
    observacoes: string | null;
    data_ultima_interacao: string | null;
    created_at: string;
    dia_cadencia?: string | null;
    metadata?: any;
    atendimento_humano?: boolean | null;
}

export interface ChatMessage {
    type: 'human' | 'ai';
    content: string;
}

export interface ChatHistory {
    id: number;
    session_id: string;
    message: ChatMessage;
    created_at?: string;
}
