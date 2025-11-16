import { create } from 'zustand';

export interface PromptFormState {
  // Section 1: Application Title
  applicationTitle: string;

  // Section 2: Purpose
  purpose: string;
  highLevelDescription: string;

  // Section 3: Look and Feel
  lookAndFeel: string;
  colorScheme: string;

  // Section 4: UI Elements Required
  uiElements: string;

  // Section 5: User Flows
  userFlows: string;

  // Section 6: User Inputs
  userInputs: string;
  inputExamples: string;

  // Section 7: Actions & Data Processing
  actions: string;
  dataProcessing: string;

  // Metadata
  promptName: string;
  currentSection: number;
}

export interface PromptWizardStore extends PromptFormState {
  updateField: (field: keyof PromptFormState, value: string) => void;
  setCurrentSection: (section: number) => void;
  resetForm: () => void;
  getFormData: () => PromptFormState;
  loadFormData: (data: PromptFormState) => void;
}

const initialState: PromptFormState = {
  applicationTitle: '',
  purpose: '',
  highLevelDescription: '',
  lookAndFeel: '',
  colorScheme: '',
  uiElements: '',
  userFlows: '',
  userInputs: '',
  inputExamples: '',
  actions: '',
  dataProcessing: '',
  promptName: 'Untitled Application',
  currentSection: 0,
};

export const usePromptWizard = create<PromptWizardStore>((set, get) => ({
  ...initialState,
  updateField: (field, value) => set({ [field]: value }),
  setCurrentSection: (section) => set({ currentSection: section }),
  resetForm: () => set(initialState),
  getFormData: () => {
    const state = get();
    return {
      applicationTitle: state.applicationTitle,
      purpose: state.purpose,
      highLevelDescription: state.highLevelDescription,
      lookAndFeel: state.lookAndFeel,
      colorScheme: state.colorScheme,
      uiElements: state.uiElements,
      userFlows: state.userFlows,
      userInputs: state.userInputs,
      inputExamples: state.inputExamples,
      actions: state.actions,
      dataProcessing: state.dataProcessing,
      promptName: state.promptName,
      currentSection: state.currentSection,
    };
  },
  loadFormData: (data) => set(data),
}));
