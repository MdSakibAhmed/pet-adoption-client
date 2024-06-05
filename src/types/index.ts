export type ChangeHandler = (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => void;
export type FormSubmitHandler = (
  event: React.FormEvent<HTMLFormElement>
) => void;
