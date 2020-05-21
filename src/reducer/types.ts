// Defining the State Schema ->

export interface AppState {
  file: string;
  upload: boolean;
  showImageOptions: boolean;
  error: boolean;
  onSubmit: boolean;
  imagePreview: string | null;
  loading: boolean;
}
