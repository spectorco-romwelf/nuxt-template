// ~/composables/useToaster.js
export const useToaster = () => {
  const toast = useToast();

  const toastSuccess = (
    title = 'Notification success',
    icon = 'i-lucide-circle-check'
  ) => {
    toast.add({
      title,
      icon,
      ui: {
        icon: 'size-6 text-white',
        root: 'items-center bg-black',
        title: 'text-lg text-white',
        close: 'cursor-pointer text-white',
      },
    });
  };

  const toastError = (
    title = 'Notification error',
    icon = 'i-lucide-shield-x'
  ) => {
    toast.add({
      title,
      icon,
      ui: {
        icon: 'size-6 text-white',
        root: 'items-center bg-red-600',
        title: 'text-lg text-white',
        close: 'cursor-pointer text-white',
      },
    });
  };

  return { toastSuccess, toastError };
};
