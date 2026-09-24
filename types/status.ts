export type StatusType = "info" | "warning" | "error" | "success";

export interface StatusItem {
  id: string;
  type: StatusType;
  message: string;
}
