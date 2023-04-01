import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

interface SliderProps {
  ariaLabel: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  width: string;
}

const CustomSlider: React.FC<SliderProps> = ({ ariaLabel, defaultValue, min, max, step, onChange, width }) => {
  return (
    <Slider
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      width={width}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default CustomSlider;
