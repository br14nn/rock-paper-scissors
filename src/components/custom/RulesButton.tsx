import Button from "@/components/ui/Button";

type TRulesButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RulesButton = ({ onClick }: TRulesButtonProps) => {
  return (
    <Button
      className="mt-auto min-w-[110px] py-1.5 text-sm tracking-widest text-white transition-colors duration-150 hover:bg-header-outline"
      variant={"outline"}
      onClick={onClick}
    >
      RULES
    </Button>
  );
};

export default RulesButton;
