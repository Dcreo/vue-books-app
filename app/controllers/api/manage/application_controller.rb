class Api::Manage::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  def index
  end
end
