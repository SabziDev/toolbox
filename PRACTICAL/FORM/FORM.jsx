const { createName, isPending } = useCreateNameMutation();

const {
  register,
  handleSubmit,
  reset: resetForm,
  formState: { errors },
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
      "border-2 placeholder:text-NAME",
      errors.email ? "border-red-500 ring-red-500" : "border-COLOR",
    ])}
    {...register("NAME")}
  />
  {errors.NAME && <span className="text-red-500">{errors.NAME.message}</span>}

  <button
    type="submit"
    disabled={isPending}
    className={clsx([
      // TODO Btn bg
      "bg-NAME active:scale-98 active:bg-NAME/90",
      isPending && "pointer-events-none opacity-50 select-none",
    ])}
  >
    {/* TODO BeatLoader Color - Btn Text */}
    {isPending ? (
      <BeatLoader size={10} speedMultiplier={0.8} color="#COLOR" />
    ) : (
      "BTN"
    )}
  </button>
</form>;
