class EmotionPolicy < ApplicationPolicy
  def create?
    true
  end

  def counter?
    true
  end

  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.where(user_id: user.id)
    # end
  end
end
