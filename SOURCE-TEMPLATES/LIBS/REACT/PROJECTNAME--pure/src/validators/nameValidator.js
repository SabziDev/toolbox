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
    .string({ error: "Name1 باید یک استرینگ باشد!" })
    // .string({ error: "Name1 should be a string!" })
    .nonempty({ error: "Name1 اجباری است!" })
    // .nonempty({ error: "Name1 is required!" })
    .min(COUNT, { error: "Name1 باید حداقل شامل COUNT کاراکتر باشد!" })
    // .min(COUNT, { error: "Name1 must contain at least COUNT characters!" })
    .max(COUNT, { error: "Name1 باید حداکثر شامل COUNT کاراکتر باشد!" })
    // .max(COUNT, { error: "Name1 must contain at most COUNT characters!" })
    .regex(/REGEX/, { error: "NAME1 MESSAGE" }),

  name2: z
    .string({ error: "Name2 باید یک استرینگ باشد!" })
    // .string({ error: "Name2 should be a string!" })
    .nonempty({ error: "Name2 اجباری است!" })
    // .nonempty({ error: "Name2 is required!" })
    .min(COUNT, { error: "Name2 باید حداقل شامل COUNT کاراکتر باشد!" })
    // .min(COUNT, { error: "Name2 must contain at least COUNT characters!" })
    .max(COUNT, { error: "Name2 باید حداکثر شامل COUNT کاراکتر باشد!" })
    // .max(COUNT, { error: "Name2 must contain at most COUNT characters!" })
    .regex(/REGEX/, { error: "NAME2 MESSAGE" }),
});

export default nameSchema;
