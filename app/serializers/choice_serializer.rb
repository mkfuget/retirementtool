class ChoiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :activeChoice, :configuration_id
end
