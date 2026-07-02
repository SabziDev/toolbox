const {
  register,
  handleSubmit,
  reset: resetForm,
  formState: { errors, isSubmitting },
} = useForm({
  defaultValues: {
    // TODO Default Values
    NAME: "",
  },

  resolver: zodResolver(nameSchema),
});

const submitForm = (data) => createName({ data, resetForm });

<form onSubmit={handleSubmit(submitForm)}>
  {/* TODO Input type && register - Error Message */}
  <input type="TYPE" {...register("NAME")} />
  {errors.NAME && errors.NAME.message}

  {/* TODO Submit Btn classes */}
  <button
    type="submit"
    disabled={isSubmitting}
    className={clsx([
      "CLASSES",
      isSubmitting && "pointer-events-none opacity-50",
    ])}
  >
    BTN
  </button>
</form>;
