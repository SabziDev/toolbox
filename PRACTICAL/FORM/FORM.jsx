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

<form noValidate onSubmit={handleSubmit(submitForm)}>
  {/* TODO Input-type - placeholder - TC - B && R - register - Error Message */}
  <input
    type="TYPE"
    placeholder="PLACEHOLDER"
    className={clsx([
      "placeholder:text-NAME",
      errors.email ? "border-red-500 ring-red-500" : "border-blue",
    ])}
    {...register("NAME")}
  />
  {errors.NAME && <span className="text-red-500">{errors.NAME.message}</span>}

  <button
    type="submit"
    disabled={isSubmitting}
    className={clsx([
      // TODO Btn bg
      "bg-NAME active:scale-98 active:bg-NAME/90",
      isSubmitting && "pointer-events-none opacity-50 select-none",
    ])}
  >
    BTN
  </button>
</form>;
