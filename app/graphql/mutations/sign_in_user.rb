module Mutations
  class SignInUser < Mutations::BaseMutation
    null true

    argument :credentials, Types::AuthProviderCredentialsInput, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(credentials: nil)
      # basic validation
      return unless credentials

      user = User.find_by email: credentials[:email]

      # ensures we have the correct user
      return unless user && user.authenticate(credentials[:password])

      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user-id:#{ user.id }")

      { user: user, token: token }
    end
  end
end