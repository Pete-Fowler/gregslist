class HiddensController < ApplicationController
  def create 
    hidden = Hidden.create!(hidden_params)
    render json: hidden, status: :ok
  end

  def destroy 
    hidden = Hidden.find(params[:id])
    hidden.destroy
    render json: {}, status: :accepted
  end

  private

  def hidden_params
    params.permit(:user_id, :post_id)
  end
end
