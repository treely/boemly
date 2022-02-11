import OverflownText from '../OverflownText';

export interface LabelTextPairProps {
  label: string;
  text: string;
}

export const LabelTextPair: React.FC<LabelTextPairProps> = ({
  label,
  text,
}: LabelTextPairProps) => (
  <div>
    <OverflownText size="mdRegularNormal" color="gray" noOfLines={1}>
      {label}
    </OverflownText>
    <OverflownText size="mdRegularNormal" color="black" pt="1">
      {text}
    </OverflownText>
  </div>
);
