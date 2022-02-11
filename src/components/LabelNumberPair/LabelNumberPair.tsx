import OverflownText from '../OverflownText';

export interface LabelNumberPairProps {
  label: string;
  number: string;
}

export const LabelNumberPair: React.FC<LabelNumberPairProps> = ({
  label,
  number,
}: LabelNumberPairProps) => (
  <div>
    <OverflownText size="xsLowNormal">{label}</OverflownText>
    <OverflownText size="lgMonoNormal" color="black">
      {number}
    </OverflownText>
  </div>
);
