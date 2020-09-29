class Retiree < ApplicationRecord
    has_many :configurations

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
end
