class ApplicationController < ActionController::API
    include ActionController::Cookies



    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
      
        render json: { error: "This action is not authorized" }, status: :unauthorized unless @current_user
    end

end
