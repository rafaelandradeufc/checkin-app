package br.sebrae.ce.checkinapp.controller.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.sebrae.ce.checkinapp.model.Presence;

public class PresenceDTO {

	private long id;
	private LocalDate date;

	public PresenceDTO(Presence presence) {
		setId(presence.getId());
		setDate(presence.getDate());
	}

	public static List<PresenceDTO> toPresenceDTOList(List<Presence> presences) {
		List<PresenceDTO> presencesDTO = new ArrayList<>();
		for (Presence presence : presences)
			presencesDTO.add(new PresenceDTO(presence));
		return presencesDTO;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}
