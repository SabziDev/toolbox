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
  {errors.NAME && <span>{errors.NAME.message}</span>}

  <button
    type="submit"
    disabled={isSubmitting}
    className={clsx(["", isSubmitting && "pointer-events-none opacity-50"])}
  >
    BTN
  </button>
</form>;
