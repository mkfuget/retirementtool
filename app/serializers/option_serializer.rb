class OptionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :initialGain, :monthlyGain, :dateStarted, :duration, :choice_id
end
