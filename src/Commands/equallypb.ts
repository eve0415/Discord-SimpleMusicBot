/*
 * Copyright 2021-2023 mtripg6666tdr
 * 
 * This file is part of mtripg6666tdr/Discord-SimpleMusicBot. 
 * (npm package name: 'discord-music-bot' / repository url: <https://github.com/mtripg6666tdr/Discord-SimpleMusicBot> )
 * 
 * mtripg6666tdr/Discord-SimpleMusicBot is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the Free Software Foundation, 
 * either version 3 of the License, or (at your option) any later version.
 *
 * mtripg6666tdr/Discord-SimpleMusicBot is distributed in the hope that it will be useful, 
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with mtripg6666tdr/Discord-SimpleMusicBot. 
 * If not, see <https://www.gnu.org/licenses/>.
 */

import type { CommandArgs } from ".";
import type { CommandMessage } from "../Component/CommandMessage";

import { Helper } from "@mtripg6666tdr/eris-command-resolver";

import { BaseCommand } from ".";
import { Util } from "../Util";
import { getColor } from "../Util/color";

export default class EquallyPlayback extends BaseCommand {
  constructor(){
    super({
      name: "均等再生",
      alias: ["equallyplayback", "eqpb", "equally"],
      description: "追加ユーザーごとにキュー内の楽曲を均等に再生します",
      unlist: false,
      category: "playlist",
      requiredPermissionsOr: ["admin", "noConnection", "onlyListener", "dj"],
      shouldDefer: false,
    });
  }

  async run(message: CommandMessage, options: CommandArgs){
    options.server.updateBoundChannel(message);
    if(options.server.equallyPlayback){
      options.server.equallyPlayback = false;
      message.reply("❌均等再生をオフにしました").catch(e => Util.logger.log(e, "error"));
    }else{
      options.server.equallyPlayback = true;
      const embed = new Helper.MessageEmbedBuilder()
        .setTitle("⭕均等再生をオンにしました")
        .setDescription("楽曲追加時に、楽曲を追加したユーザーごとにできるだけ均等になるようにする機能です。")
        .setColor(getColor("EQUALLY"))
        .toEris()
      ;
      message.reply({embeds: [embed]}).catch(er => Util.logger.log(er, "error"));
    }
  }
}
