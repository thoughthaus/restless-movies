require 'rails_helper'

describe Mutations::CreateUser do
  it "creates new user" do
    username= 'username'
    email = 'email@example.com' 

    user = Mutations::CreateUser.new(object: nil, context: {}).resolve({
      username: username,
      auth_provider: {
        signup_data: {
          email: email,
          password: '[omitted]'
        }
      }
    })
    
    expect(user.persisted?)
    expect(user.username).to eq(username)
    expect(user.email).to eq(email)
  end
end