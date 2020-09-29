class Configuration < ApplicationRecord
  has_many :choices
  belongs_to :retiree
end
