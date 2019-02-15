module Mutations
  class CreateUser < Mutations::BaseMutation
    # often we will need input types for specific mutation
    # in those cases we can define those input types in the mutation class itself
    class AuthProviderSignupData < Types::BaseInputObject
      argument :signup_data, Types::AuthProviderCredentialsInput, required: true
    end

    argument :username, String, required: true
    argument :auth_provider, AuthProviderSignupData, required: true

    type Types::UserType

    def resolve(username: nil, auth_provider: nil)
      User.create!(
        username: username,
        email: auth_provider&.[](:signup_data)&.[](:email),
        password: auth_provider&.[](:signup_data)&.[](:password)
      )
    end
  end
end