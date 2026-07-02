// const [errorMessage, setErrorMessage] = useState("");

// const newName = { name1, name2 };
// const validationResult = nameSchema.safeParse(newName);

// if (validationResult.success) {
//   // ✅ codes...
// } else {
//   setErrorMessage(validationResult.error.issues[0].message);
// }

import * as z from "zod";

// TODO Validator Schema
const nameSchema = z.object({
  name1: z
    .nonempty("Name1 اجباری است!")
    // .nonempty("Name1 is required!")
    .string("Name1 باید یک استرینگ باشد!")
    // .string("Name1 should be a string!")
    .min(COUNT, "Name1 باید حداقل شامل COUNT کاراکتر باشد!")
    // .min(COUNT, "Name1 must contain at least COUNT characters!")
    .max(COUNT, "Name1 باید حداکثر شامل COUNT کاراکتر باشد!")
    // .max(COUNT, "Name1 must contain at most COUNT characters!")
    .regex(/REGEX/, "NAME1 MESSAGE"),

  name2: z
    .nonempty("Name2 اجباری است!")
    // .nonempty("Name2 is required!")
    .string("Name2 باید یک استرینگ باشد!")
    // .string("Name2 should be a string!")
    .min(COUNT, "Name2 باید حداقل شامل COUNT کاراکتر باشد!")
    // .min(COUNT, "Name2 must contain at least COUNT characters!")
    .max(COUNT, "Name2 باید حداکثر شامل COUNT کاراکتر باشد!")
    // .max(COUNT, "Name2 must contain at most COUNT characters!")
    .regex(/REGEX/, "NAME2 MESSAGE"),
});

export default nameSchema;
