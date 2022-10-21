import { searchValidation } from "src/validations/search.validation";
import { useFormik } from 'formik';

import { ErrorMsg } from "src/components";
import { ISearchValues } from "./search.interfaces";
import { useState } from "react";

const initialValues: ISearchValues = {
  search: '',
};

export default function useFormSearch() {
  const [t, setT] = useState<ReturnType<typeof setTimeout>>();

  const searchHandler = (
    { search }: ISearchValues
  ) => {
    if (t) clearTimeout(t);
		setT(
			setTimeout(
				() => console.log(search),
				500
			)
		);
  }

  const formSearch = useFormik<ISearchValues>({
		initialValues,
		validationSchema: searchValidation,
		onSubmit: searchHandler
	});

  const errorSearch = formSearch.errors.search &&
    formSearch.touched.search && (
			<ErrorMsg className="errorField">
				{formSearch.errors.search}
			</ErrorMsg>
		);

  return { formSearch, errorSearch  }
}
