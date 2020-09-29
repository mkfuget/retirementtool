class ConfigurationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :retiree_id
end
