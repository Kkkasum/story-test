import WebApp from '@twa-dev/sdk'
import { FC } from 'react'

const Story: FC = () => {
	const mediaUrl = 'https://lizartsworld.com/Lizarts/items/1.jpeg'

	const onClick = () => {
		WebApp.shareToStory(mediaUrl)
	}

	return (
		<div className='flex container mx-auto items-center'>
			<div>
				<img src={mediaUrl} width={250} height={250} />
			</div>
			<button onClick={onClick}>Share to Story</button>
		</div>
	)
}

export default Story
