export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      alumni_profiles: {
        Row: {
          average_rating: number | null
          company: string | null
          created_at: string | null
          department: string | null
          designation: string | null
          domain: string[] | null
          doubts_solved: number | null
          graduation_year: number | null
          headline: string | null
          id: string
          interests: string[] | null
          linkedin_url: string | null
          total_points: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          average_rating?: number | null
          company?: string | null
          created_at?: string | null
          department?: string | null
          designation?: string | null
          domain?: string[] | null
          doubts_solved?: number | null
          graduation_year?: number | null
          headline?: string | null
          id?: string
          interests?: string[] | null
          linkedin_url?: string | null
          total_points?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          average_rating?: number | null
          company?: string | null
          created_at?: string | null
          department?: string | null
          designation?: string | null
          domain?: string[] | null
          doubts_solved?: number | null
          graduation_year?: number | null
          headline?: string | null
          id?: string
          interests?: string[] | null
          linkedin_url?: string | null
          total_points?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_active: boolean | null
          posted_by: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          posted_by: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          posted_by?: string
          title?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          attachment_url: string | null
          created_at: string | null
          doubt_id: string | null
          id: string
          is_read: boolean | null
          message: string
          recipient_id: string
          sender_id: string
        }
        Insert: {
          attachment_url?: string | null
          created_at?: string | null
          doubt_id?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          recipient_id: string
          sender_id: string
        }
        Update: {
          attachment_url?: string | null
          created_at?: string | null
          doubt_id?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          recipient_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_doubt_id_fkey"
            columns: ["doubt_id"]
            isOneToOne: false
            referencedRelation: "doubts"
            referencedColumns: ["id"]
          },
        ]
      }
      doubts: {
        Row: {
          assigned_to: string | null
          created_at: string | null
          description: string
          domain: string
          id: string
          rating: number | null
          resolved_at: string | null
          status: Database["public"]["Enums"]["doubt_status"] | null
          student_id: string
          title: string
          updated_at: string | null
          urgency: Database["public"]["Enums"]["urgency_level"] | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string | null
          description: string
          domain: string
          id?: string
          rating?: number | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["doubt_status"] | null
          student_id: string
          title: string
          updated_at?: string | null
          urgency?: Database["public"]["Enums"]["urgency_level"] | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string | null
          description?: string
          domain?: string
          id?: string
          rating?: number | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["doubt_status"] | null
          student_id?: string
          title?: string
          updated_at?: string | null
          urgency?: Database["public"]["Enums"]["urgency_level"] | null
        }
        Relationships: []
      }
      event_rsvps: {
        Row: {
          created_at: string | null
          event_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          current_attendees: number | null
          description: string
          donation_enabled: boolean | null
          donation_goal: number | null
          donation_raised: number | null
          event_date: string
          hosted_by: string
          id: string
          image_url: string | null
          is_approved: boolean | null
          is_virtual: boolean | null
          location: string | null
          max_attendees: number | null
          meeting_link: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_attendees?: number | null
          description: string
          donation_enabled?: boolean | null
          donation_goal?: number | null
          donation_raised?: number | null
          event_date: string
          hosted_by: string
          id?: string
          image_url?: string | null
          is_approved?: boolean | null
          is_virtual?: boolean | null
          location?: string | null
          max_attendees?: number | null
          meeting_link?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_attendees?: number | null
          description?: string
          donation_enabled?: boolean | null
          donation_goal?: number | null
          donation_raised?: number | null
          event_date?: string
          hosted_by?: string
          id?: string
          image_url?: string | null
          is_approved?: boolean | null
          is_virtual?: boolean | null
          location?: string | null
          max_attendees?: number | null
          meeting_link?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leaderboard_entries: {
        Row: {
          alumni_id: string
          donations_made: number | null
          doubts_solved: number | null
          events_hosted: number | null
          id: string
          is_top_alumni: boolean | null
          opportunities_posted: number | null
          points: number | null
          updated_at: string | null
        }
        Insert: {
          alumni_id: string
          donations_made?: number | null
          doubts_solved?: number | null
          events_hosted?: number | null
          id?: string
          is_top_alumni?: boolean | null
          opportunities_posted?: number | null
          points?: number | null
          updated_at?: string | null
        }
        Update: {
          alumni_id?: string
          donations_made?: number | null
          doubts_solved?: number | null
          events_hosted?: number | null
          id?: string
          is_top_alumni?: boolean | null
          opportunities_posted?: number | null
          points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      opportunities: {
        Row: {
          application_url: string | null
          company: string | null
          created_at: string | null
          description: string
          id: string
          is_active: boolean | null
          location: string | null
          posted_by: string
          requirements: string[] | null
          title: string
          type: Database["public"]["Enums"]["opportunity_type"]
          updated_at: string | null
        }
        Insert: {
          application_url?: string | null
          company?: string | null
          created_at?: string | null
          description: string
          id?: string
          is_active?: boolean | null
          location?: string | null
          posted_by: string
          requirements?: string[] | null
          title: string
          type: Database["public"]["Enums"]["opportunity_type"]
          updated_at?: string | null
        }
        Update: {
          application_url?: string | null
          company?: string | null
          created_at?: string | null
          description?: string
          id?: string
          is_active?: boolean | null
          location?: string | null
          posted_by?: string
          requirements?: string[] | null
          title?: string
          type?: Database["public"]["Enums"]["opportunity_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string
          id: string
          location: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name: string
          id: string
          location?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string
          id?: string
          location?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      student_profiles: {
        Row: {
          batch_year: number | null
          created_at: string | null
          department: string | null
          enrollment_number: string
          id: string
          interests: string[] | null
          resume_url: string | null
          semester: number | null
          skills: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          batch_year?: number | null
          created_at?: string | null
          department?: string | null
          enrollment_number: string
          id?: string
          interests?: string[] | null
          resume_url?: string | null
          semester?: number | null
          skills?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          batch_year?: number | null
          created_at?: string | null
          department?: string | null
          enrollment_number?: string
          id?: string
          interests?: string[] | null
          resume_url?: string | null
          semester?: number | null
          skills?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      doubt_status: "open" | "assigned" | "in_progress" | "resolved"
      opportunity_type: "internship" | "job" | "volunteering"
      urgency_level: "low" | "medium" | "high" | "critical"
      user_role: "admin" | "alumni" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      doubt_status: ["open", "assigned", "in_progress", "resolved"],
      opportunity_type: ["internship", "job", "volunteering"],
      urgency_level: ["low", "medium", "high", "critical"],
      user_role: ["admin", "alumni", "student"],
    },
  },
} as const
