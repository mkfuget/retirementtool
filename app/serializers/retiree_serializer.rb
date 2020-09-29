class RetireeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cashAssets, :integer, :expectedRateOfReturn, :budget, :slug
end
