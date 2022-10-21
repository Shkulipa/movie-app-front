import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFormSignInProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    toggleForm: () => void
  }
