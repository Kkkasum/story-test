import WebApp from '@twa-dev/sdk'
import { FC } from 'react'

const Story: FC = () => {
	const mediaUrl = 'https://lizartsworld.com/Lizarts/items/1.jpeg'

	const shareToStory = () => {
		WebApp.shareToStory(mediaUrl)
	}

	const shareToStoryWithParams = () => {
		const params = {
			text: 'My LizArts Nft',
		}

		WebApp.shareToStory(mediaUrl, params)
	}

	return (
		<div className='flex container mx-auto items-center'>
			<div>
				<img src={mediaUrl} width={250} height={250} />
			</div>
			<div>
				<button onClick={shareToStory}>Share to Story</button>
			</div>
			<div>
				<button onClick={shareToStoryWithParams}>
					Share To Story With Params
				</button>
			</div>
		</div>
	)
}

export default Story
