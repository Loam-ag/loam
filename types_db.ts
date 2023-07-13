export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      form_ai_outputs: {
        Row: {
          output_value: string | null
          subsection_id: string
          user_id: string
        }
        Insert: {
          output_value?: string | null
          subsection_id: string
          user_id: string
        }
        Update: {
          output_value?: string | null
          subsection_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_ai_outputs_subsection_id_fkey"
            columns: ["subsection_id"]
            referencedRelation: "form_subsections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_ai_outputs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      form_fields: {
        Row: {
          field_conditional: number | null
          field_conditional_value: string | null
          field_label: string
          field_name: string
          field_options: Json[] | null
          field_order: number
          field_type: string
          id: string
          subsection_id: string | null
        }
        Insert: {
          field_conditional?: number | null
          field_conditional_value?: string | null
          field_label: string
          field_name: string
          field_options?: Json[] | null
          field_order: number
          field_type: string
          id: string
          subsection_id?: string | null
        }
        Update: {
          field_conditional?: number | null
          field_conditional_value?: string | null
          field_label?: string
          field_name?: string
          field_options?: Json[] | null
          field_order?: number
          field_type?: string
          id?: string
          subsection_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_fields_subsection_id_fkey"
            columns: ["subsection_id"]
            referencedRelation: "form_subsections"
            referencedColumns: ["id"]
          }
        ]
      }
      form_responses: {
        Row: {
          field_id: string
          response_value: string | null
          subsection_id: string
          user_id: string
        }
        Insert: {
          field_id: string
          response_value?: string | null
          subsection_id: string
          user_id: string
        }
        Update: {
          field_id?: string
          response_value?: string | null
          subsection_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_responses_field_id_fkey"
            columns: ["field_id"]
            referencedRelation: "form_fields"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_responses_subsection_id_fkey"
            columns: ["subsection_id"]
            referencedRelation: "form_subsections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_responses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      form_sections: {
        Row: {
          id: string
          section_name: string
          section_order: number
          template_id: string | null
        }
        Insert: {
          id: string
          section_name: string
          section_order: number
          template_id?: string | null
        }
        Update: {
          id?: string
          section_name?: string
          section_order?: number
          template_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_sections_template_id_fkey"
            columns: ["template_id"]
            referencedRelation: "form_templates"
            referencedColumns: ["id"]
          }
        ]
      }
      form_subsections: {
        Row: {
          id: string
          section_id: string | null
          subsection_name: string
          subsection_order: number
        }
        Insert: {
          id: string
          section_id?: string | null
          subsection_name: string
          subsection_order: number
        }
        Update: {
          id?: string
          section_id?: string | null
          subsection_name?: string
          subsection_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "form_subsections_section_id_fkey"
            columns: ["section_id"]
            referencedRelation: "form_sections"
            referencedColumns: ["id"]
          }
        ]
      }
      form_templates: {
        Row: {
          id: string
          template_name: string
        }
        Insert: {
          id: string
          template_name: string
        }
        Update: {
          id?: string
          template_name?: string
        }
        Relationships: []
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
