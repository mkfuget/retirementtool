class Choice < ApplicationRecord
  has_many :options
  belongs_to :configuration
end
