module Api
    module V1
      class OptionsController < ApiController
        protect_from_forgery with: :null_session,
        if: Proc.new { |c| c.request.format =~ %r{application/json} }

        # POST /api/v1/reviews
        def create
          review = current_user.reviews.new(review_params)
  
          if review.save
            render json: serializer(review)
          else
            render json: errors(review), status: 422
          end
        end
  
        # DELETE /api/v1/reviews/:id
        def destroy
          review = current_user.reviews.find(params[:id])
  
          if review.destroy
            head :no_content
          else
            render json: errors(review), status: 422
          end
        end
  
        private
  
        # Strong params
        def review_params
          params.require(:option).permit(:initialGain, :monthlyGain, :dateStarted, :duration, :choiceId)
        end
    end
end  