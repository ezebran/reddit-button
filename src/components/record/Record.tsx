import { RecordSingle, RecordColor } from '@/styles/RecordsStyles'
import { useColors } from '@/hooks/useColors'

type RecordProps = {
    username: string,
    color: number,
    key: number
}

export default function Record({username, color}:RecordProps) {

    let userColor = useColors(color)

    return (
        <RecordSingle>
            {username}
            <RecordColor color={userColor} />
        </RecordSingle>
    )
  }