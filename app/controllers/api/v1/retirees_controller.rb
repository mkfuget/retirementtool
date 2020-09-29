module Api
    module V1
        class RetireesController < ApplicationController
            protect_from_forgery with: :null_session,
            if: Proc.new { |c| c.request.format =~ %r{application/json} }
      
            def index
                retirees = Retiree.all
                
                render json: RetireeSerializer.new(retirees).serialized_json
            end

            def show
                retiree = Retiree.where(slug: params[:slug])
                
                render json: RetireeSerializer.new(retiree).serialized_json
            end


            def create
                retiree = Retiree.new(puzzle_params)

                if retiree.save
                    render json: RetireeSerializer.new(retiree).serialized_json
                else
                    render json: { error: retiree.errors.messages}, status: 422
                end
            end

            def destory
                retiree = Retiree.find_by(slug: params[:slug])


                if retiree.destory
                    head :no_content
                else
                    render json: { error: retiree.errors.messages}, status: 422
                end
            end

            private

            def retiree_params
                params.require(:retiree).permit(:name, :slug, :cashAssets, :expectedRateOfReturn, :budget)
            end

            def options
                @options ||= { include: %i[configurations]}
            end

        end
    end
end