class ReviewPolicy < ApplicationPolicy
  def show?
    record.user.id == user.id
  end
end