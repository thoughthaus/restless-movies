require 'rails_helper'

describe Mutations::SignInUser do
  def perform(args = {})
    Mutations::SignInUser.new(object: nil, context: { }).resolve(args)
  end

  it 'succeeds' do
    user = create(:user)

    result = perform(
      credentials: {
        email: user.email,
        password: user.password
      }
    )

    assert result[:token].present?
    assert_equal result[:user], user
  end

  it 'fails because no credentials' do
    assert_nil perform
  end

  it 'fails because wrong email' do
    create(:user)
    assert_nil perform(credentials: { email: 'wrong' })
  end

  it 'fails because wrong password' do
    user = create(:user)
    assert_nil perform(credentials: { email: user.email, password: 'wrong' })
  end
end